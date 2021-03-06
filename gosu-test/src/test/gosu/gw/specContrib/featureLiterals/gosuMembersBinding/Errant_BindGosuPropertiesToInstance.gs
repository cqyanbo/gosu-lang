package gw.specContrib.featureLiterals.gosuMembersBinding

class Errant_BindGosuPropertiesToInstance {
  var jack : GosuFL
  //binding java class property to instance
  var gosuInternalMyProp = jack#MyPropInternal
  var gosuPrivateMyProp = jack#MyPropPrivate
  var gosuProtectedMyProp = jack#MyPropProtected
  var gosuPublicMyProp = jack#MyPropPublic

  function getSetPropertiesFeatureLiterals () {
    var gInstance : GosuFL
    //set the values
    //correct arguments
    gosuInternalMyProp.set("Ed")
    gosuPrivateMyProp.set("Ed")
    gosuProtectedMyProp.set("Ed")
    gosuPublicMyProp.set("Ed")

    //incorrect arguments
    gosuInternalMyProp.set(gInstance,"Ed")      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)'
    gosuInternalMyProp.set(gInstance, "Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    gosuInternalMyProp.set(gInstance, 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    gosuInternalMyProp.set("Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    gosuPrivateMyProp.set(gInstance, "Ed")      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)'
    gosuPrivateMyProp.set(gInstance, "Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    gosuPrivateMyProp.set(gInstance, 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    gosuPrivateMyProp.set("Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    gosuProtectedMyProp.set(gInstance, "Ed")      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)'
    gosuProtectedMyProp.set(gInstance, "Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    gosuProtectedMyProp.set(gInstance, 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    gosuProtectedMyProp.set("Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    gosuPublicMyProp.set(gInstance, "Ed")      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)'
    gosuPublicMyProp.set(gInstance, "Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    gosuPublicMyProp.set(gInstance, 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    gosuPublicMyProp.set("Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    //get the values
    var x1111 = gosuInternalMyProp.get()
    var x1112 = gosuInternalMyProp.get(gInstance)      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)'
    var x1113 = gosuInternalMyProp.get("hi")      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'

    var x1121 = gosuPrivateMyProp.get()
    var x1122 = gosuPrivateMyProp.get(gInstance)      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)'
    var x1123 = gosuPrivateMyProp.get("hi")      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'

    var x1131 = gosuProtectedMyProp.get()
    var x1132 = gosuProtectedMyProp.get(gInstance)      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)'
    var x1133 = gosuProtectedMyProp.get("hi")      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'

    var x1141 = gosuPublicMyProp.get()
    var x1142 = gosuPublicMyProp.get(gInstance)      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)'
    var x1143 = gosuPublicMyProp.get("hi")      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'

  }
}