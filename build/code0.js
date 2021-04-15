gdjs.Menu0Code = {};
gdjs.Menu0Code.GDBackgroundObjects1= [];
gdjs.Menu0Code.GDBackgroundObjects2= [];
gdjs.Menu0Code.GDBackgroundObjects3= [];
gdjs.Menu0Code.GDBackgroundObjects4= [];
gdjs.Menu0Code.GDElipseObjects1= [];
gdjs.Menu0Code.GDElipseObjects2= [];
gdjs.Menu0Code.GDElipseObjects3= [];
gdjs.Menu0Code.GDElipseObjects4= [];
gdjs.Menu0Code.GDSoundObjects1= [];
gdjs.Menu0Code.GDSoundObjects2= [];
gdjs.Menu0Code.GDSoundObjects3= [];
gdjs.Menu0Code.GDSoundObjects4= [];

gdjs.Menu0Code.conditionTrue_0 = {val:false};
gdjs.Menu0Code.condition0IsTrue_0 = {val:false};
gdjs.Menu0Code.condition1IsTrue_0 = {val:false};
gdjs.Menu0Code.condition2IsTrue_0 = {val:false};


gdjs.Menu0Code.eventsList0 = function(runtimeScene) {

{


gdjs.Menu0Code.condition0IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Menu0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.Menu0Code.GDSoundObjects1);
{for(var i = 0, len = gdjs.Menu0Code.GDSoundObjects1.length ;i < len;++i) {
    gdjs.Menu0Code.GDSoundObjects1[i].setAnimationName("Off");
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}}

}


};gdjs.Menu0Code.mapOfGDgdjs_46Menu0Code_46GDSoundObjects2Objects = Hashtable.newFrom({"Sound": gdjs.Menu0Code.GDSoundObjects2});gdjs.Menu0Code.eventsList1 = function(runtimeScene) {

{


gdjs.Menu0Code.condition0IsTrue_0.val = false;
gdjs.Menu0Code.condition1IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Menu0Code.condition0IsTrue_0.val ) {
{
gdjs.Menu0Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Menu0Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Menu0Code.GDSoundObjects2, gdjs.Menu0Code.GDSoundObjects3);

{for(var i = 0, len = gdjs.Menu0Code.GDSoundObjects3.length ;i < len;++i) {
    gdjs.Menu0Code.GDSoundObjects3[i].setAnimationName("On");
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.Menu0Code.condition0IsTrue_0.val = false;
gdjs.Menu0Code.condition1IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.Menu0Code.condition0IsTrue_0.val ) {
{
gdjs.Menu0Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Menu0Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Menu0Code.GDSoundObjects2 */
{for(var i = 0, len = gdjs.Menu0Code.GDSoundObjects2.length ;i < len;++i) {
    gdjs.Menu0Code.GDSoundObjects2[i].setAnimationName("Off");
}
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.Menu0Code.mapOfGDgdjs_46Menu0Code_46GDElipseObjects1Objects = Hashtable.newFrom({"Elipse": gdjs.Menu0Code.GDElipseObjects1});gdjs.Menu0Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.Menu0Code.GDSoundObjects2);

gdjs.Menu0Code.condition0IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Menu0Code.mapOfGDgdjs_46Menu0Code_46GDSoundObjects2Objects, runtimeScene, true, false);
}if (gdjs.Menu0Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.Menu0Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Elipse"), gdjs.Menu0Code.GDElipseObjects1);

gdjs.Menu0Code.condition0IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Menu0Code.mapOfGDgdjs_46Menu0Code_46GDElipseObjects1Objects, runtimeScene, true, false);
}if (gdjs.Menu0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}}

}


};gdjs.Menu0Code.eventsList3 = function(runtimeScene) {

{


gdjs.Menu0Code.condition0IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Menu0Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "start.mp3", 1, true, 70, 1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.network.sendAsyncRequest("https://kolibri.net.ru/token.php", "", "GET", "html/text", runtimeScene.getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.Menu0Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Menu0Code.condition0IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Menu0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Menu0Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.Menu0Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu0Code.GDBackgroundObjects1.length = 0;
gdjs.Menu0Code.GDBackgroundObjects2.length = 0;
gdjs.Menu0Code.GDBackgroundObjects3.length = 0;
gdjs.Menu0Code.GDBackgroundObjects4.length = 0;
gdjs.Menu0Code.GDElipseObjects1.length = 0;
gdjs.Menu0Code.GDElipseObjects2.length = 0;
gdjs.Menu0Code.GDElipseObjects3.length = 0;
gdjs.Menu0Code.GDElipseObjects4.length = 0;
gdjs.Menu0Code.GDSoundObjects1.length = 0;
gdjs.Menu0Code.GDSoundObjects2.length = 0;
gdjs.Menu0Code.GDSoundObjects3.length = 0;
gdjs.Menu0Code.GDSoundObjects4.length = 0;

gdjs.Menu0Code.eventsList3(runtimeScene);
return;

}

gdjs['Menu0Code'] = gdjs.Menu0Code;
