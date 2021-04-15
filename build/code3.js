gdjs.ModeMenuCode = {};
gdjs.ModeMenuCode.GDBackgroundObjects1= [];
gdjs.ModeMenuCode.GDBackgroundObjects2= [];
gdjs.ModeMenuCode.GDBackgroundObjects3= [];
gdjs.ModeMenuCode.GDWikiObjects1= [];
gdjs.ModeMenuCode.GDWikiObjects2= [];
gdjs.ModeMenuCode.GDWikiObjects3= [];
gdjs.ModeMenuCode.GDNewGameObjects1= [];
gdjs.ModeMenuCode.GDNewGameObjects2= [];
gdjs.ModeMenuCode.GDNewGameObjects3= [];
gdjs.ModeMenuCode.GDTrainingModeObjects1= [];
gdjs.ModeMenuCode.GDTrainingModeObjects2= [];
gdjs.ModeMenuCode.GDTrainingModeObjects3= [];
gdjs.ModeMenuCode.GDBackObjects1= [];
gdjs.ModeMenuCode.GDBackObjects2= [];
gdjs.ModeMenuCode.GDBackObjects3= [];
gdjs.ModeMenuCode.GDSoundObjects1= [];
gdjs.ModeMenuCode.GDSoundObjects2= [];
gdjs.ModeMenuCode.GDSoundObjects3= [];
gdjs.ModeMenuCode.GDRectangleObjects1= [];
gdjs.ModeMenuCode.GDRectangleObjects2= [];
gdjs.ModeMenuCode.GDRectangleObjects3= [];

gdjs.ModeMenuCode.conditionTrue_0 = {val:false};
gdjs.ModeMenuCode.condition0IsTrue_0 = {val:false};
gdjs.ModeMenuCode.condition1IsTrue_0 = {val:false};
gdjs.ModeMenuCode.condition2IsTrue_0 = {val:false};


gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDNewGameObjects2Objects = Hashtable.newFrom({"NewGame": gdjs.ModeMenuCode.GDNewGameObjects2});gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDTrainingModeObjects2Objects = Hashtable.newFrom({"TrainingMode": gdjs.ModeMenuCode.GDTrainingModeObjects2});gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDWikiObjects2Objects = Hashtable.newFrom({"Wiki": gdjs.ModeMenuCode.GDWikiObjects2});gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDBackObjects2Objects = Hashtable.newFrom({"Back": gdjs.ModeMenuCode.GDBackObjects2});gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.ModeMenuCode.GDSoundObjects1});gdjs.ModeMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(11), false);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "start.mp3", 1, true, 100, 1);
}}

}


{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(11), true);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.ModeMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
gdjs.ModeMenuCode.condition1IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.ModeMenuCode.condition0IsTrue_0.val ) {
{
gdjs.ModeMenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.ModeMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.ModeMenuCode.GDSoundObjects1, gdjs.ModeMenuCode.GDSoundObjects2);

{for(var i = 0, len = gdjs.ModeMenuCode.GDSoundObjects2.length ;i < len;++i) {
    gdjs.ModeMenuCode.GDSoundObjects2[i].setAnimationName("Off");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}}

}


{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
gdjs.ModeMenuCode.condition1IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.ModeMenuCode.condition0IsTrue_0.val ) {
{
gdjs.ModeMenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.ModeMenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.ModeMenuCode.GDSoundObjects1 */
{for(var i = 0, len = gdjs.ModeMenuCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.ModeMenuCode.GDSoundObjects1[i].setAnimationName("On");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}
{ //Subevents
gdjs.ModeMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.ModeMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewGame"), gdjs.ModeMenuCode.GDNewGameObjects2);

gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDNewGameObjects2Objects, runtimeScene, true, false);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TrainingMode"), gdjs.ModeMenuCode.GDTrainingModeObjects2);

gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDTrainingModeObjects2Objects, runtimeScene, true, false);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TrainingLevel", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Wiki"), gdjs.ModeMenuCode.GDWikiObjects2);

gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDWikiObjects2Objects, runtimeScene, true, false);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Wiki", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ModeMenuCode.GDBackObjects2);

gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDBackObjects2Objects, runtimeScene, true, false);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "UserMenu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.ModeMenuCode.GDSoundObjects1);

gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDSoundObjects1Objects, runtimeScene, true, false);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.ModeMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.ModeMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.ModeMenuCode.GDSoundObjects2);
{for(var i = 0, len = gdjs.ModeMenuCode.GDSoundObjects2.length ;i < len;++i) {
    gdjs.ModeMenuCode.GDSoundObjects2[i].setAnimationName("On");
}
}}

}


{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.ModeMenuCode.GDSoundObjects1);
{for(var i = 0, len = gdjs.ModeMenuCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.ModeMenuCode.GDSoundObjects1[i].setAnimationName("Off");
}
}}

}


};gdjs.ModeMenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ModeMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}
{ //Subevents
gdjs.ModeMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.ModeMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ModeMenuCode.GDBackgroundObjects1.length = 0;
gdjs.ModeMenuCode.GDBackgroundObjects2.length = 0;
gdjs.ModeMenuCode.GDBackgroundObjects3.length = 0;
gdjs.ModeMenuCode.GDWikiObjects1.length = 0;
gdjs.ModeMenuCode.GDWikiObjects2.length = 0;
gdjs.ModeMenuCode.GDWikiObjects3.length = 0;
gdjs.ModeMenuCode.GDNewGameObjects1.length = 0;
gdjs.ModeMenuCode.GDNewGameObjects2.length = 0;
gdjs.ModeMenuCode.GDNewGameObjects3.length = 0;
gdjs.ModeMenuCode.GDTrainingModeObjects1.length = 0;
gdjs.ModeMenuCode.GDTrainingModeObjects2.length = 0;
gdjs.ModeMenuCode.GDTrainingModeObjects3.length = 0;
gdjs.ModeMenuCode.GDBackObjects1.length = 0;
gdjs.ModeMenuCode.GDBackObjects2.length = 0;
gdjs.ModeMenuCode.GDBackObjects3.length = 0;
gdjs.ModeMenuCode.GDSoundObjects1.length = 0;
gdjs.ModeMenuCode.GDSoundObjects2.length = 0;
gdjs.ModeMenuCode.GDSoundObjects3.length = 0;
gdjs.ModeMenuCode.GDRectangleObjects1.length = 0;
gdjs.ModeMenuCode.GDRectangleObjects2.length = 0;
gdjs.ModeMenuCode.GDRectangleObjects3.length = 0;

gdjs.ModeMenuCode.eventsList4(runtimeScene);
return;

}

gdjs['ModeMenuCode'] = gdjs.ModeMenuCode;
