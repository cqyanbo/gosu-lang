package editor;

import editor.util.SettleModalEventQueue;
import gw.fs.IFile;
import gw.lang.reflect.IType;
import gw.lang.reflect.TypeSystem;
import gw.lang.reflect.gs.IGosuClass;

import javax.swing.*;
import javax.swing.border.EmptyBorder;
import javax.swing.text.AbstractDocument;
import javax.swing.text.Element;
import javax.swing.text.html.HTML;
import java.awt.*;
import java.awt.event.InputEvent;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseWheelEvent;
import java.io.PrintStream;

/**
 */
public class SystemPanel extends JPanel
{
  private JTextPane _outputPanel;
  private EditorScrollPane _scroller;
  private PrintStream _out;
  private PrintStream _err;
  private PrintStream _sysOut;
  private PrintStream _sysErr;

  public SystemPanel()
  {
    super();
    BatchDocument document = new BatchDocument();
    _outputPanel = new JTextPane( document );
    _out = new TextComponentWriter( Color.WHITE, document, System.out );
    _err = new TextComponentWriter( Color.PINK, document, System.err );
    configureUI();
  }

  public void configureUI()
  {
    setLayout( new BorderLayout() );

    _outputPanel.setFont( new Font( "monospaced", Font.BOLD, 12 ) );
    _outputPanel.setBorder( new EmptyBorder( 3, 3, 0, 0 ) );
    _outputPanel.setMargin( new Insets( 10, 10, 10, 10 ) );
    _outputPanel.setForeground( Color.white );
    _outputPanel.setBackground( Color.black );
    _outputPanel.setEditable( false );

    ScrollableEditorRootPane editorRootScroller = new ScrollableEditorRootPane( _outputPanel );
    editorRootScroller.setContentPane( _outputPanel );
    editorRootScroller.setBorder( null );

    _scroller = new EditorScrollPane( null, _outputPanel, editorRootScroller );
    _scroller.setBorder( null );
    JViewport vp = _scroller.getViewport();
    vp.setScrollMode( JViewport.BLIT_SCROLL_MODE );

    add( _scroller, BorderLayout.CENTER );

    JLabel label = new JLabel( "" );
    label.setFont( label.getFont().deriveFont( Font.BOLD ) );
    label.setBorder( new EmptyBorder( 0, 4 + GosuEditor.MIN_LINENUMBER_WIDTH, 0, 0 ) );
    add( label, BorderLayout.NORTH );

    MouseHandler ml = new MouseHandler();
    _outputPanel.addMouseMotionListener( ml );
    _outputPanel.addMouseListener( ml );
    _outputPanel.addMouseWheelListener( ml );
  }

  public JTextPane getOutputPanel()
  {
    return _outputPanel;
  }

  public void addNotify()
  {
    super.addNotify();
    _sysOut = System.out;
    _sysErr = System.err;
    System.setOut( _out );
    System.setErr( _err );
  }

  public void removeNotify()
  {
    super.removeNotify();
    System.setOut( _sysOut );
    System.setErr( _sysErr );
  }

  /**
   * @param strOut
   */
  public void println( String strOut )
  {
    _out.println( strOut );
  }

  /**
   * @param strOut
   */
  public void setText( String strOut )
  {
    _outputPanel.setText( strOut );
  }

  /**
   *
   */
  public void clear()
  {
    _outputPanel.setText( "" );
    scrollRectToVisible( new Rectangle( 0, 0, 0, 0 ) );
  }

  private class MouseHandler extends MouseAdapter
  {
    private SourceFileAttribute _link;

    @Override
    public void mousePressed( MouseEvent e )
    {
      _link = getLinkAtCursor( e );
    }

    @Override
    public void mouseReleased( MouseEvent e )
    {
      if( _link == getLinkAtCursor( e ) )
      {
        gotoLink( _link );
      }
      _link = null;
    }

    @Override
    public void mouseMoved( MouseEvent e )
    {
      SourceFileAttribute link = getLinkAtCursor( e );
      if( link != null )
      {
        _outputPanel.setCursor( Cursor.getPredefinedCursor( Cursor.HAND_CURSOR ) );
      }
      else
      {
        _outputPanel.setCursor( Cursor.getPredefinedCursor( Cursor.DEFAULT_CURSOR ) );
      }
    }

    private SourceFileAttribute getLinkAtCursor( MouseEvent e )
    {
      int caret = _outputPanel.viewToModel( e.getPoint() );
      Element elem = getElementAt( caret );
      if( elem != null )
      {
        return (SourceFileAttribute)((AbstractDocument.LeafElement)elem).getAttribute( HTML.Tag.A );
      }

      return null;
    }

    private void gotoLink( SourceFileAttribute link )
    {
      if( link != null )
      {
        IType type = TypeSystem.getByFullNameIfValid( link.getFqn() );
        if( type instanceof IGosuClass )
        {
          IFile sourceFile = ((IGosuClass)type).getSourceFileHandle().getFile();
          if( sourceFile != null && sourceFile.isJavaFile() )
          {
            RunMe.getEditorFrame().getGosuPanel().openFile( sourceFile.toJavaFile() );
            SettleModalEventQueue.instance().run();
          }
          GosuEditorPane editor = RunMe.getEditorFrame().getGosuPanel().getCurrentEditor().getEditor();
          Element root = editor.getDocument().getDefaultRootElement();
          int startOfLineOffset = root.getElement( link.getLine() - 1 ).getStartOffset();
          editor.setCaretPosition( startOfLineOffset );
          editor.requestFocus();
        }
      }
    }

    public void mouseWheelMoved( MouseWheelEvent e )
    {
      // For high-resolution pointing devices, the events sometimes come in with 0 rotation, which we
      // want to ignore as it indicates a small incremental scroll.
      if( e.getWheelRotation() == 0 )
      {
        return;
      }

      if( (e.getModifiers() & InputEvent.CTRL_MASK) == 0 )
      {
        forward( e );
        return;
      }

      int iInc = e.getWheelRotation() < 0 ? -1 : 1;

      Font font = _outputPanel.getFont();
      int iSize = font.getSize() + iInc;
      if( iSize < 4 || iSize > 72 )
      {
        return;
      }
      _outputPanel.setFont( font.deriveFont( (float)iSize ) );
      _scroller.getAdviceColumn().revalidate();
      _scroller.getAdviceColumn().repaint();
    }

    /**
     * For some reason the parent does not get mouse wheel
     */
    private void forward( MouseWheelEvent e )
    {
      e = new MouseWheelEvent( e.getComponent().getParent(), e.getID(), e.getWhen(), e.getModifiers(), e.getX(), e.getY(), e.getClickCount(), e.isPopupTrigger(), e.getScrollType(), e.getScrollAmount(), e.getWheelRotation() );
      Toolkit.getDefaultToolkit().getSystemEventQueue().postEvent( e );
    }

    protected Element getElementAt( int offset )
    {
      return getElementAt( _outputPanel.getDocument().getDefaultRootElement(), offset );
    }
    private Element getElementAt( Element parent, int offset )
    {
      if( parent.isLeaf() )
      {
        return parent;
      }
      return getElementAt( parent.getElement( parent.getElementIndex( offset ) ), offset );
    }
  }
}