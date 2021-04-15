gdjs.UserMenuCode = {};
gdjs.UserMenuCode.GDMenuBackgroundObjects1= [];
gdjs.UserMenuCode.GDMenuBackgroundObjects2= [];
gdjs.UserMenuCode.GDButtonOkObjects1= [];
gdjs.UserMenuCode.GDButtonOkObjects2= [];
gdjs.UserMenuCode.GDTextOkObjects1= [];
gdjs.UserMenuCode.GDTextOkObjects2= [];
gdjs.UserMenuCode.GDUserNameObjects1= [];
gdjs.UserMenuCode.GDUserNameObjects2= [];
gdjs.UserMenuCode.GDUserRectangleObjects1= [];
gdjs.UserMenuCode.GDUserRectangleObjects2= [];
gdjs.UserMenuCode.GDUserTextObjects1= [];
gdjs.UserMenuCode.GDUserTextObjects2= [];
gdjs.UserMenuCode.GDUserNameTextObjects1= [];
gdjs.UserMenuCode.GDUserNameTextObjects2= [];
gdjs.UserMenuCode.GDBackObjects1= [];
gdjs.UserMenuCode.GDBackObjects2= [];
gdjs.UserMenuCode.GDUserNameViewObjects1= [];
gdjs.UserMenuCode.GDUserNameViewObjects2= [];
gdjs.UserMenuCode.GDSoundObjects1= [];
gdjs.UserMenuCode.GDSoundObjects2= [];
gdjs.UserMenuCode.GDNewObjectObjects1= [];
gdjs.UserMenuCode.GDNewObjectObjects2= [];
gdjs.UserMenuCode.GDNewObject2Objects1= [];
gdjs.UserMenuCode.GDNewObject2Objects2= [];
gdjs.UserMenuCode.GDNewObject3Objects1= [];
gdjs.UserMenuCode.GDNewObject3Objects2= [];
gdjs.UserMenuCode.GDNewObject4Objects1= [];
gdjs.UserMenuCode.GDNewObject4Objects2= [];
gdjs.UserMenuCode.GDNewObject5Objects1= [];
gdjs.UserMenuCode.GDNewObject5Objects2= [];

gdjs.UserMenuCode.conditionTrue_0 = {val:false};
gdjs.UserMenuCode.condition0IsTrue_0 = {val:false};
gdjs.UserMenuCode.condition1IsTrue_0 = {val:false};
gdjs.UserMenuCode.condition2IsTrue_0 = {val:false};


gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDButtonOkObjects1Objects = Hashtable.newFrom({"ButtonOk": gdjs.UserMenuCode.GDButtonOkObjects1});gdjs.UserMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ModeMenu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}}

}


};gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.UserMenuCode.GDBackObjects1});gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDUserRectangleObjects1Objects = Hashtable.newFrom({"UserRectangle": gdjs.UserMenuCode.GDUserRectangleObjects1});gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDUserNameTextObjects1Objects = Hashtable.newFrom({"UserNameText": gdjs.UserMenuCode.GDUserNameTextObjects1});gdjs.UserMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("UserNameText"), gdjs.UserMenuCode.GDUserNameTextObjects1);
{gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.func(runtimeScene, gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDUserNameTextObjects1Objects, "TextEntryVirtualKeyboard", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.UserMenuCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("UserNameText"), gdjs.UserMenuCode.GDUserNameTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("UserNameView"), gdjs.UserMenuCode.GDUserNameViewObjects1);
{for(var i = 0, len = gdjs.UserMenuCode.GDUserNameViewObjects1.length ;i < len;++i) {
    gdjs.UserMenuCode.GDUserNameViewObjects1[i].setBBText(gdjs.evtTools.string.subStr((( gdjs.UserMenuCode.GDUserNameTextObjects1.length === 0 ) ? "" :gdjs.UserMenuCode.GDUserNameTextObjects1[0].getString()), 0, 12));
}
}{runtimeScene.getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr((( gdjs.UserMenuCode.GDUserNameTextObjects1.length === 0 ) ? "" :gdjs.UserMenuCode.GDUserNameTextObjects1[0].getString()), 0, 12));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonOk"), gdjs.UserMenuCode.GDButtonOkObjects1);

gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDButtonOkObjects1Objects, runtimeScene, true, false);
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.UserMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.UserMenuCode.GDBackObjects1);

gdjs.UserMenuCode.condition0IsTrue_0.val = false;
gdjs.UserMenuCode.condition1IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.UserMenuCode.condition0IsTrue_0.val ) {
{
gdjs.UserMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.UserMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UserRectangle"), gdjs.UserMenuCode.GDUserRectangleObjects1);

gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDUserRectangleObjects1Objects, runtimeScene, true, false);
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.UserMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0);
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("UserNameText"), gdjs.UserMenuCode.GDUserNameTextObjects1);
{for(var i = 0, len = gdjs.UserMenuCode.GDUserNameTextObjects1.length ;i < len;++i) {
    gdjs.UserMenuCode.GDUserNameTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
}

}


};

gdjs.UserMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UserMenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.UserMenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.UserMenuCode.GDButtonOkObjects1.length = 0;
gdjs.UserMenuCode.GDButtonOkObjects2.length = 0;
gdjs.UserMenuCode.GDTextOkObjects1.length = 0;
gdjs.UserMenuCode.GDTextOkObjects2.length = 0;
gdjs.UserMenuCode.GDUserNameObjects1.length = 0;
gdjs.UserMenuCode.GDUserNameObjects2.length = 0;
gdjs.UserMenuCode.GDUserRectangleObjects1.length = 0;
gdjs.UserMenuCode.GDUserRectangleObjects2.length = 0;
gdjs.UserMenuCode.GDUserTextObjects1.length = 0;
gdjs.UserMenuCode.GDUserTextObjects2.length = 0;
gdjs.UserMenuCode.GDUserNameTextObjects1.length = 0;
gdjs.UserMenuCode.GDUserNameTextObjects2.length = 0;
gdjs.UserMenuCode.GDBackObjects1.length = 0;
gdjs.UserMenuCode.GDBackObjects2.length = 0;
gdjs.UserMenuCode.GDUserNameViewObjects1.length = 0;
gdjs.UserMenuCode.GDUserNameViewObjects2.length = 0;
gdjs.UserMenuCode.GDSoundObjects1.length = 0;
gdjs.UserMenuCode.GDSoundObjects2.length = 0;
gdjs.UserMenuCode.GDNewObjectObjects1.length = 0;
gdjs.UserMenuCode.GDNewObjectObjects2.length = 0;
gdjs.UserMenuCode.GDNewObject2Objects1.length = 0;
gdjs.UserMenuCode.GDNewObject2Objects2.length = 0;
gdjs.UserMenuCode.GDNewObject3Objects1.length = 0;
gdjs.UserMenuCode.GDNewObject3Objects2.length = 0;
gdjs.UserMenuCode.GDNewObject4Objects1.length = 0;
gdjs.UserMenuCode.GDNewObject4Objects2.length = 0;
gdjs.UserMenuCode.GDNewObject5Objects1.length = 0;
gdjs.UserMenuCode.GDNewObject5Objects2.length = 0;

gdjs.UserMenuCode.eventsList2(runtimeScene);
return;

}

gdjs['UserMenuCode'] = gdjs.UserMenuCode;
