gdjs.ModeMenuCode = {};
gdjs.ModeMenuCode.GDNewObjectObjects1= [];
gdjs.ModeMenuCode.GDNewObjectObjects2= [];
gdjs.ModeMenuCode.GDNewObjectObjects3= [];
gdjs.ModeMenuCode.GDRectangleNewGameObjects1= [];
gdjs.ModeMenuCode.GDRectangleNewGameObjects2= [];
gdjs.ModeMenuCode.GDRectangleNewGameObjects3= [];
gdjs.ModeMenuCode.GDNewGameTextObjects1= [];
gdjs.ModeMenuCode.GDNewGameTextObjects2= [];
gdjs.ModeMenuCode.GDNewGameTextObjects3= [];
gdjs.ModeMenuCode.GDWikiObjects1= [];
gdjs.ModeMenuCode.GDWikiObjects2= [];
gdjs.ModeMenuCode.GDWikiObjects3= [];
gdjs.ModeMenuCode.GDTrainingModeObjects1= [];
gdjs.ModeMenuCode.GDTrainingModeObjects2= [];
gdjs.ModeMenuCode.GDTrainingModeObjects3= [];
gdjs.ModeMenuCode.GDTrainingTextObjects1= [];
gdjs.ModeMenuCode.GDTrainingTextObjects2= [];
gdjs.ModeMenuCode.GDTrainingTextObjects3= [];
gdjs.ModeMenuCode.GDWikiTextObjects1= [];
gdjs.ModeMenuCode.GDWikiTextObjects2= [];
gdjs.ModeMenuCode.GDWikiTextObjects3= [];
gdjs.ModeMenuCode.GDBackObjects1= [];
gdjs.ModeMenuCode.GDBackObjects2= [];
gdjs.ModeMenuCode.GDBackObjects3= [];

gdjs.ModeMenuCode.conditionTrue_0 = {val:false};
gdjs.ModeMenuCode.condition0IsTrue_0 = {val:false};
gdjs.ModeMenuCode.condition1IsTrue_0 = {val:false};


gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDRectangleNewGameObjects1Objects = Hashtable.newFrom({"RectangleNewGame": gdjs.ModeMenuCode.GDRectangleNewGameObjects1});gdjs.ModeMenuCode.eventsList0 = function(runtimeScene) {

{


{
}

}


{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "начало игры.wav", false, 100, 1);
}}

}


};gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDTrainingModeObjects1Objects = Hashtable.newFrom({"TrainingMode": gdjs.ModeMenuCode.GDTrainingModeObjects1});gdjs.ModeMenuCode.eventsList1 = function(runtimeScene) {

{


{
}

}


{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TrainingLevel", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "начало игры.wav", false, 100, 1);
}}

}


};gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDWikiObjects1Objects = Hashtable.newFrom({"Wiki": gdjs.ModeMenuCode.GDWikiObjects1});gdjs.ModeMenuCode.eventsList2 = function(runtimeScene) {

{


{
}

}


{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Wiki", false);
}}

}


};gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.ModeMenuCode.GDBackObjects1});gdjs.ModeMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "UserMenu", false);
}}

}


};gdjs.ModeMenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RectangleNewGame"), gdjs.ModeMenuCode.GDRectangleNewGameObjects1);

gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDRectangleNewGameObjects1Objects, runtimeScene, true, false);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ModeMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TrainingMode"), gdjs.ModeMenuCode.GDTrainingModeObjects1);

gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDTrainingModeObjects1Objects, runtimeScene, true, false);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ModeMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Wiki"), gdjs.ModeMenuCode.GDWikiObjects1);

gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDWikiObjects1Objects, runtimeScene, true, false);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ModeMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ModeMenuCode.GDBackObjects1);

gdjs.ModeMenuCode.condition0IsTrue_0.val = false;
{
gdjs.ModeMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeMenuCode.mapOfGDgdjs_46ModeMenuCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.ModeMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ModeMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.ModeMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ModeMenuCode.GDNewObjectObjects1.length = 0;
gdjs.ModeMenuCode.GDNewObjectObjects2.length = 0;
gdjs.ModeMenuCode.GDNewObjectObjects3.length = 0;
gdjs.ModeMenuCode.GDRectangleNewGameObjects1.length = 0;
gdjs.ModeMenuCode.GDRectangleNewGameObjects2.length = 0;
gdjs.ModeMenuCode.GDRectangleNewGameObjects3.length = 0;
gdjs.ModeMenuCode.GDNewGameTextObjects1.length = 0;
gdjs.ModeMenuCode.GDNewGameTextObjects2.length = 0;
gdjs.ModeMenuCode.GDNewGameTextObjects3.length = 0;
gdjs.ModeMenuCode.GDWikiObjects1.length = 0;
gdjs.ModeMenuCode.GDWikiObjects2.length = 0;
gdjs.ModeMenuCode.GDWikiObjects3.length = 0;
gdjs.ModeMenuCode.GDTrainingModeObjects1.length = 0;
gdjs.ModeMenuCode.GDTrainingModeObjects2.length = 0;
gdjs.ModeMenuCode.GDTrainingModeObjects3.length = 0;
gdjs.ModeMenuCode.GDTrainingTextObjects1.length = 0;
gdjs.ModeMenuCode.GDTrainingTextObjects2.length = 0;
gdjs.ModeMenuCode.GDTrainingTextObjects3.length = 0;
gdjs.ModeMenuCode.GDWikiTextObjects1.length = 0;
gdjs.ModeMenuCode.GDWikiTextObjects2.length = 0;
gdjs.ModeMenuCode.GDWikiTextObjects3.length = 0;
gdjs.ModeMenuCode.GDBackObjects1.length = 0;
gdjs.ModeMenuCode.GDBackObjects2.length = 0;
gdjs.ModeMenuCode.GDBackObjects3.length = 0;

gdjs.ModeMenuCode.eventsList4(runtimeScene);
return;

}

gdjs['ModeMenuCode'] = gdjs.ModeMenuCode;
