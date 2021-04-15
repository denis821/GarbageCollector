gdjs.Menu1Code = {};
gdjs.Menu1Code.GDMenuBackgroundObjects1= [];
gdjs.Menu1Code.GDMenuBackgroundObjects2= [];
gdjs.Menu1Code.GDMenuBackgroundObjects3= [];
gdjs.Menu1Code.GDButtonOkObjects1= [];
gdjs.Menu1Code.GDButtonOkObjects2= [];
gdjs.Menu1Code.GDButtonOkObjects3= [];
gdjs.Menu1Code.GDRuleBoxObjects1= [];
gdjs.Menu1Code.GDRuleBoxObjects2= [];
gdjs.Menu1Code.GDRuleBoxObjects3= [];
gdjs.Menu1Code.GDRuleHeaderObjects1= [];
gdjs.Menu1Code.GDRuleHeaderObjects2= [];
gdjs.Menu1Code.GDRuleHeaderObjects3= [];
gdjs.Menu1Code.GDRuleTextObjects1= [];
gdjs.Menu1Code.GDRuleTextObjects2= [];
gdjs.Menu1Code.GDRuleTextObjects3= [];
gdjs.Menu1Code.GDSoundObjects1= [];
gdjs.Menu1Code.GDSoundObjects2= [];
gdjs.Menu1Code.GDSoundObjects3= [];

gdjs.Menu1Code.conditionTrue_0 = {val:false};
gdjs.Menu1Code.condition0IsTrue_0 = {val:false};
gdjs.Menu1Code.condition1IsTrue_0 = {val:false};
gdjs.Menu1Code.condition2IsTrue_0 = {val:false};


gdjs.Menu1Code.mapOfGDgdjs_46Menu1Code_46GDButtonOkObjects1Objects = Hashtable.newFrom({"ButtonOk": gdjs.Menu1Code.GDButtonOkObjects1});gdjs.Menu1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Menu1Code.condition0IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Menu1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "UserMenu", false);
}}

}


};gdjs.Menu1Code.eventsList1 = function(runtimeScene) {

{


gdjs.Menu1Code.condition0IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if (gdjs.Menu1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.Menu1Code.GDSoundObjects2);
{for(var i = 0, len = gdjs.Menu1Code.GDSoundObjects2.length ;i < len;++i) {
    gdjs.Menu1Code.GDSoundObjects2[i].setAnimationName("On");
}
}}

}


{


gdjs.Menu1Code.condition0IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if (gdjs.Menu1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.Menu1Code.GDSoundObjects1);
{for(var i = 0, len = gdjs.Menu1Code.GDSoundObjects1.length ;i < len;++i) {
    gdjs.Menu1Code.GDSoundObjects1[i].setAnimationName("Off");
}
}}

}


};gdjs.Menu1Code.mapOfGDgdjs_46Menu1Code_46GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.Menu1Code.GDSoundObjects1});gdjs.Menu1Code.eventsList2 = function(runtimeScene) {

{


{
}

}


};gdjs.Menu1Code.eventsList3 = function(runtimeScene) {

{


gdjs.Menu1Code.condition0IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(11), false);
}if (gdjs.Menu1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "start.mp3", 1, true, 100, 1);
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(11), true);
}}

}


{


gdjs.Menu1Code.condition0IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(11), true);
}if (gdjs.Menu1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.Menu1Code.eventsList4 = function(runtimeScene) {

{


gdjs.Menu1Code.condition0IsTrue_0.val = false;
gdjs.Menu1Code.condition1IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.Menu1Code.condition0IsTrue_0.val ) {
{
gdjs.Menu1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Menu1Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Menu1Code.GDSoundObjects1, gdjs.Menu1Code.GDSoundObjects2);

{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{for(var i = 0, len = gdjs.Menu1Code.GDSoundObjects2.length ;i < len;++i) {
    gdjs.Menu1Code.GDSoundObjects2[i].setAnimationName("Off");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}
{ //Subevents
gdjs.Menu1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.Menu1Code.condition0IsTrue_0.val = false;
gdjs.Menu1Code.condition1IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Menu1Code.condition0IsTrue_0.val ) {
{
gdjs.Menu1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Menu1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Menu1Code.GDSoundObjects1 */
{for(var i = 0, len = gdjs.Menu1Code.GDSoundObjects1.length ;i < len;++i) {
    gdjs.Menu1Code.GDSoundObjects1[i].setAnimationName("On");
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}
{ //Subevents
gdjs.Menu1Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Menu1Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.Menu1Code.GDSoundObjects1);

gdjs.Menu1Code.condition0IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Menu1Code.mapOfGDgdjs_46Menu1Code_46GDSoundObjects1Objects, runtimeScene, true, false);
}if (gdjs.Menu1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.Menu1Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Menu1Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonOk"), gdjs.Menu1Code.GDButtonOkObjects1);

gdjs.Menu1Code.condition0IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Menu1Code.mapOfGDgdjs_46Menu1Code_46GDButtonOkObjects1Objects, runtimeScene, true, false);
}if (gdjs.Menu1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Menu1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Menu1Code.condition0IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Menu1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}
{ //Subevents
gdjs.Menu1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Menu1Code.condition0IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Menu1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Menu1Code.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.Menu1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu1Code.GDMenuBackgroundObjects1.length = 0;
gdjs.Menu1Code.GDMenuBackgroundObjects2.length = 0;
gdjs.Menu1Code.GDMenuBackgroundObjects3.length = 0;
gdjs.Menu1Code.GDButtonOkObjects1.length = 0;
gdjs.Menu1Code.GDButtonOkObjects2.length = 0;
gdjs.Menu1Code.GDButtonOkObjects3.length = 0;
gdjs.Menu1Code.GDRuleBoxObjects1.length = 0;
gdjs.Menu1Code.GDRuleBoxObjects2.length = 0;
gdjs.Menu1Code.GDRuleBoxObjects3.length = 0;
gdjs.Menu1Code.GDRuleHeaderObjects1.length = 0;
gdjs.Menu1Code.GDRuleHeaderObjects2.length = 0;
gdjs.Menu1Code.GDRuleHeaderObjects3.length = 0;
gdjs.Menu1Code.GDRuleTextObjects1.length = 0;
gdjs.Menu1Code.GDRuleTextObjects2.length = 0;
gdjs.Menu1Code.GDRuleTextObjects3.length = 0;
gdjs.Menu1Code.GDSoundObjects1.length = 0;
gdjs.Menu1Code.GDSoundObjects2.length = 0;
gdjs.Menu1Code.GDSoundObjects3.length = 0;

gdjs.Menu1Code.eventsList6(runtimeScene);
return;

}

gdjs['Menu1Code'] = gdjs.Menu1Code;
