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
gdjs.Menu1Code.GDOkObjects1= [];
gdjs.Menu1Code.GDOkObjects2= [];
gdjs.Menu1Code.GDOkObjects3= [];
gdjs.Menu1Code.GDSoundObjects1= [];
gdjs.Menu1Code.GDSoundObjects2= [];
gdjs.Menu1Code.GDSoundObjects3= [];
gdjs.Menu1Code.GDNewObjectObjects1= [];
gdjs.Menu1Code.GDNewObjectObjects2= [];
gdjs.Menu1Code.GDNewObjectObjects3= [];
gdjs.Menu1Code.GDNewObject2Objects1= [];
gdjs.Menu1Code.GDNewObject2Objects2= [];
gdjs.Menu1Code.GDNewObject2Objects3= [];
gdjs.Menu1Code.GDNewObject3Objects1= [];
gdjs.Menu1Code.GDNewObject3Objects2= [];
gdjs.Menu1Code.GDNewObject3Objects3= [];
gdjs.Menu1Code.GDNewObject4Objects1= [];
gdjs.Menu1Code.GDNewObject4Objects2= [];
gdjs.Menu1Code.GDNewObject4Objects3= [];
gdjs.Menu1Code.GDNewObject5Objects1= [];
gdjs.Menu1Code.GDNewObject5Objects2= [];
gdjs.Menu1Code.GDNewObject5Objects3= [];

gdjs.Menu1Code.conditionTrue_0 = {val:false};
gdjs.Menu1Code.condition0IsTrue_0 = {val:false};
gdjs.Menu1Code.condition1IsTrue_0 = {val:false};
gdjs.Menu1Code.condition2IsTrue_0 = {val:false};


gdjs.Menu1Code.mapOfGDgdjs_46Menu1Code_46GDButtonOkObjects1Objects = Hashtable.newFrom({"ButtonOk": gdjs.Menu1Code.GDButtonOkObjects1});gdjs.Menu1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Menu1Code.condition0IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Menu1Code.condition0IsTrue_0.val) {
}

}


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
}

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


gdjs.Menu1Code.condition0IsTrue_0.val = false;
gdjs.Menu1Code.condition1IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Menu1Code.condition0IsTrue_0.val ) {
{
gdjs.Menu1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}}
if (gdjs.Menu1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Menu1Code.GDSoundObjects1 */
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{for(var i = 0, len = gdjs.Menu1Code.GDSoundObjects1.length ;i < len;++i) {
    gdjs.Menu1Code.GDSoundObjects1[i].setAnimationName("Off");
}
}}

}


};gdjs.Menu1Code.eventsList3 = function(runtimeScene) {

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

{ //Subevents
gdjs.Menu1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.Menu1Code.GDSoundObjects1);

gdjs.Menu1Code.condition0IsTrue_0.val = false;
{
gdjs.Menu1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Menu1Code.mapOfGDgdjs_46Menu1Code_46GDSoundObjects1Objects, runtimeScene, true, false);
}if (gdjs.Menu1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Menu1Code.eventsList2(runtimeScene);} //End of subevents
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
gdjs.Menu1Code.GDOkObjects1.length = 0;
gdjs.Menu1Code.GDOkObjects2.length = 0;
gdjs.Menu1Code.GDOkObjects3.length = 0;
gdjs.Menu1Code.GDSoundObjects1.length = 0;
gdjs.Menu1Code.GDSoundObjects2.length = 0;
gdjs.Menu1Code.GDSoundObjects3.length = 0;
gdjs.Menu1Code.GDNewObjectObjects1.length = 0;
gdjs.Menu1Code.GDNewObjectObjects2.length = 0;
gdjs.Menu1Code.GDNewObjectObjects3.length = 0;
gdjs.Menu1Code.GDNewObject2Objects1.length = 0;
gdjs.Menu1Code.GDNewObject2Objects2.length = 0;
gdjs.Menu1Code.GDNewObject2Objects3.length = 0;
gdjs.Menu1Code.GDNewObject3Objects1.length = 0;
gdjs.Menu1Code.GDNewObject3Objects2.length = 0;
gdjs.Menu1Code.GDNewObject3Objects3.length = 0;
gdjs.Menu1Code.GDNewObject4Objects1.length = 0;
gdjs.Menu1Code.GDNewObject4Objects2.length = 0;
gdjs.Menu1Code.GDNewObject4Objects3.length = 0;
gdjs.Menu1Code.GDNewObject5Objects1.length = 0;
gdjs.Menu1Code.GDNewObject5Objects2.length = 0;
gdjs.Menu1Code.GDNewObject5Objects3.length = 0;

gdjs.Menu1Code.eventsList3(runtimeScene);
return;

}

gdjs['Menu1Code'] = gdjs.Menu1Code;
