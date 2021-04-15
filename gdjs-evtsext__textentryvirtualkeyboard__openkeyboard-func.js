gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard = {};
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.GDObjectObjects1= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.GDObjectObjects2= [];

gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.conditionTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.userFunc0xc28be8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

if (gdjs._extensionMobileKeyboard.openKeyboard) { 
    gdjs._extensionMobileKeyboard.openKeyboard(eventsFunctionContext);
}
};
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.userFunc0xc28be8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.GDObjectObjects1[i].activate(true);
}
}
{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.func = function(runtimeScene, Object, Behavior, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.GDObjectObjects2.length = 0;

gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

