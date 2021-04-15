gdjs.UserMenuCode = {};
gdjs.UserMenuCode.GDMenuBackgroundObjects1= [];
gdjs.UserMenuCode.GDMenuBackgroundObjects2= [];
gdjs.UserMenuCode.GDMenuBackgroundObjects3= [];
gdjs.UserMenuCode.GDButtonOkObjects1= [];
gdjs.UserMenuCode.GDButtonOkObjects2= [];
gdjs.UserMenuCode.GDButtonOkObjects3= [];
gdjs.UserMenuCode.GDUserRectangleObjects1= [];
gdjs.UserMenuCode.GDUserRectangleObjects2= [];
gdjs.UserMenuCode.GDUserRectangleObjects3= [];
gdjs.UserMenuCode.GDUserTextObjects1= [];
gdjs.UserMenuCode.GDUserTextObjects2= [];
gdjs.UserMenuCode.GDUserTextObjects3= [];
gdjs.UserMenuCode.GDUserNameTextObjects1= [];
gdjs.UserMenuCode.GDUserNameTextObjects2= [];
gdjs.UserMenuCode.GDUserNameTextObjects3= [];
gdjs.UserMenuCode.GDBackObjects1= [];
gdjs.UserMenuCode.GDBackObjects2= [];
gdjs.UserMenuCode.GDBackObjects3= [];
gdjs.UserMenuCode.GDUserNameViewObjects1= [];
gdjs.UserMenuCode.GDUserNameViewObjects2= [];
gdjs.UserMenuCode.GDUserNameViewObjects3= [];
gdjs.UserMenuCode.GDSoundObjects1= [];
gdjs.UserMenuCode.GDSoundObjects2= [];
gdjs.UserMenuCode.GDSoundObjects3= [];

gdjs.UserMenuCode.conditionTrue_0 = {val:false};
gdjs.UserMenuCode.condition0IsTrue_0 = {val:false};
gdjs.UserMenuCode.condition1IsTrue_0 = {val:false};
gdjs.UserMenuCode.condition2IsTrue_0 = {val:false};


gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDBackObjects2Objects = Hashtable.newFrom({"Back": gdjs.UserMenuCode.GDBackObjects2});gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDButtonOkObjects2Objects = Hashtable.newFrom({"ButtonOk": gdjs.UserMenuCode.GDButtonOkObjects2});gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.UserMenuCode.GDSoundObjects1});gdjs.UserMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(11), false);
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "start.mp3", 1, true, 100, 1);
}}

}


{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(11), true);
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.UserMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
gdjs.UserMenuCode.condition1IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.UserMenuCode.condition0IsTrue_0.val ) {
{
gdjs.UserMenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.UserMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.UserMenuCode.GDSoundObjects1, gdjs.UserMenuCode.GDSoundObjects2);

{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.UserMenuCode.GDSoundObjects2.length ;i < len;++i) {
    gdjs.UserMenuCode.GDSoundObjects2[i].setAnimationName("Off");
}
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}}

}


{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
gdjs.UserMenuCode.condition1IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.UserMenuCode.condition0IsTrue_0.val ) {
{
gdjs.UserMenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.UserMenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.UserMenuCode.GDSoundObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.UserMenuCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.UserMenuCode.GDSoundObjects1[i].setAnimationName("On");
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}
{ //Subevents
gdjs.UserMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.UserMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.UserMenuCode.GDBackObjects2);

gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDBackObjects2Objects, runtimeScene, true, false);
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonOk"), gdjs.UserMenuCode.GDButtonOkObjects2);

gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDButtonOkObjects2Objects, runtimeScene, true, false);
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ModeMenu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Name")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.UserMenuCode.GDSoundObjects1);

gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UserMenuCode.mapOfGDgdjs_46UserMenuCode_46GDSoundObjects1Objects, runtimeScene, true, false);
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.UserMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.UserMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.UserMenuCode.GDSoundObjects2);
{for(var i = 0, len = gdjs.UserMenuCode.GDSoundObjects2.length ;i < len;++i) {
    gdjs.UserMenuCode.GDSoundObjects2[i].setAnimationName("On");
}
}}

}


{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.UserMenuCode.GDSoundObjects1);
{for(var i = 0, len = gdjs.UserMenuCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.UserMenuCode.GDSoundObjects1[i].setAnimationName("Off");
}
}}

}


};gdjs.UserMenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
gdjs.UserMenuCode.condition1IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "|";
}if ( gdjs.UserMenuCode.condition0IsTrue_0.val ) {
{
gdjs.UserMenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}}
if (gdjs.UserMenuCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setString("");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
gdjs.UserMenuCode.condition1IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "";
}if ( gdjs.UserMenuCode.condition0IsTrue_0.val ) {
{
gdjs.UserMenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}}
if (gdjs.UserMenuCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setString("|");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


};gdjs.UserMenuCode.eventsList5 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("UserNameText"), gdjs.UserMenuCode.GDUserNameTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("UserNameView"), gdjs.UserMenuCode.GDUserNameViewObjects1);
{runtimeScene.getVariables().get("Name").setString(gdjs.evtTools.string.subStr((( gdjs.UserMenuCode.GDUserNameTextObjects1.length === 0 ) ? "" :gdjs.UserMenuCode.GDUserNameTextObjects1[0].getString()), 0, 15));
}{for(var i = 0, len = gdjs.UserMenuCode.GDUserNameViewObjects1.length ;i < len;++i) {
    gdjs.UserMenuCode.GDUserNameViewObjects1[i].setBBText(gdjs.evtTools.string.subStr((( gdjs.UserMenuCode.GDUserNameTextObjects1.length === 0 ) ? "" :gdjs.UserMenuCode.GDUserNameTextObjects1[0].getString()), 0, 15) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.UserMenuCode.eventsList2(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("UserNameText"), gdjs.UserMenuCode.GDUserNameTextObjects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setString("");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(3), false);
}{for(var i = 0, len = gdjs.UserMenuCode.GDUserNameTextObjects1.length ;i < len;++i) {
    gdjs.UserMenuCode.GDUserNameTextObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.UserMenuCode.GDUserNameTextObjects1.length ;i < len;++i) {
    gdjs.UserMenuCode.GDUserNameTextObjects1[i].getBehavior("TextEntryVirtualKeyboard").openKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.UserMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.UserMenuCode.condition0IsTrue_0.val = false;
{
gdjs.UserMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "CursorCreation");
}if (gdjs.UserMenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CursorCreation");
}
{ //Subevents
gdjs.UserMenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.UserMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UserMenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.UserMenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.UserMenuCode.GDMenuBackgroundObjects3.length = 0;
gdjs.UserMenuCode.GDButtonOkObjects1.length = 0;
gdjs.UserMenuCode.GDButtonOkObjects2.length = 0;
gdjs.UserMenuCode.GDButtonOkObjects3.length = 0;
gdjs.UserMenuCode.GDUserRectangleObjects1.length = 0;
gdjs.UserMenuCode.GDUserRectangleObjects2.length = 0;
gdjs.UserMenuCode.GDUserRectangleObjects3.length = 0;
gdjs.UserMenuCode.GDUserTextObjects1.length = 0;
gdjs.UserMenuCode.GDUserTextObjects2.length = 0;
gdjs.UserMenuCode.GDUserTextObjects3.length = 0;
gdjs.UserMenuCode.GDUserNameTextObjects1.length = 0;
gdjs.UserMenuCode.GDUserNameTextObjects2.length = 0;
gdjs.UserMenuCode.GDUserNameTextObjects3.length = 0;
gdjs.UserMenuCode.GDBackObjects1.length = 0;
gdjs.UserMenuCode.GDBackObjects2.length = 0;
gdjs.UserMenuCode.GDBackObjects3.length = 0;
gdjs.UserMenuCode.GDUserNameViewObjects1.length = 0;
gdjs.UserMenuCode.GDUserNameViewObjects2.length = 0;
gdjs.UserMenuCode.GDUserNameViewObjects3.length = 0;
gdjs.UserMenuCode.GDSoundObjects1.length = 0;
gdjs.UserMenuCode.GDSoundObjects2.length = 0;
gdjs.UserMenuCode.GDSoundObjects3.length = 0;

gdjs.UserMenuCode.eventsList5(runtimeScene);
return;

}

gdjs['UserMenuCode'] = gdjs.UserMenuCode;
