gdjs.Menu0Code = {};
gdjs.Menu0Code.GDBackgroundObjects1= [];
gdjs.Menu0Code.GDBackgroundObjects2= [];
gdjs.Menu0Code.GDBackgroundObjects3= [];
gdjs.Menu0Code.GDElipseObjects1= [];
gdjs.Menu0Code.GDElipseObjects2= [];
gdjs.Menu0Code.GDElipseObjects3= [];
gdjs.Menu0Code.GDSoundObjects1= [];
gdjs.Menu0Code.GDSoundObjects2= [];
gdjs.Menu0Code.GDSoundObjects3= [];

gdjs.Menu0Code.conditionTrue_0 = {val:false};
gdjs.Menu0Code.condition0IsTrue_0 = {val:false};
gdjs.Menu0Code.condition1IsTrue_0 = {val:false};
gdjs.Menu0Code.condition2IsTrue_0 = {val:false};
gdjs.Menu0Code.conditionTrue_1 = {val:false};
gdjs.Menu0Code.condition0IsTrue_1 = {val:false};
gdjs.Menu0Code.condition1IsTrue_1 = {val:false};
gdjs.Menu0Code.condition2IsTrue_1 = {val:false};


gdjs.Menu0Code.mapOfGDgdjs_46Menu0Code_46GDElipseObjects1Objects = Hashtable.newFrom({"Elipse": gdjs.Menu0Code.GDElipseObjects1});gdjs.Menu0Code.eventsList0 = function(runtimeScene) {

{


{
}

}


{


gdjs.Menu0Code.condition0IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Menu0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu1", false);
}}

}


};gdjs.Menu0Code.mapOfGDgdjs_46Menu0Code_46GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.Menu0Code.GDSoundObjects1});gdjs.Menu0Code.eventsList1 = function(runtimeScene) {

{


gdjs.Menu0Code.condition0IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Menu0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "start.wav", 1, true, 70, 1);
}}

}


};gdjs.Menu0Code.eventsList2 = function(runtimeScene) {

{


gdjs.Menu0Code.condition0IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Menu0Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Elipse"), gdjs.Menu0Code.GDElipseObjects1);

gdjs.Menu0Code.condition0IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Menu0Code.mapOfGDgdjs_46Menu0Code_46GDElipseObjects1Objects, runtimeScene, true, false);
}if (gdjs.Menu0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Menu0Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.Menu0Code.GDSoundObjects1);

gdjs.Menu0Code.condition0IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Menu0Code.mapOfGDgdjs_46Menu0Code_46GDSoundObjects1Objects, runtimeScene, true, false);
}if (gdjs.Menu0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Menu0Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Menu0Code.condition0IsTrue_0.val = false;
gdjs.Menu0Code.condition1IsTrue_0.val = false;
{
gdjs.Menu0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "StartTimer");
}if ( gdjs.Menu0Code.condition0IsTrue_0.val ) {
{
{gdjs.Menu0Code.conditionTrue_1 = gdjs.Menu0Code.condition1IsTrue_0;
gdjs.Menu0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12561852);
}
}}
if (gdjs.Menu0Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "start.wav", 1, true, 70, 1);
}}

}


};

gdjs.Menu0Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu0Code.GDBackgroundObjects1.length = 0;
gdjs.Menu0Code.GDBackgroundObjects2.length = 0;
gdjs.Menu0Code.GDBackgroundObjects3.length = 0;
gdjs.Menu0Code.GDElipseObjects1.length = 0;
gdjs.Menu0Code.GDElipseObjects2.length = 0;
gdjs.Menu0Code.GDElipseObjects3.length = 0;
gdjs.Menu0Code.GDSoundObjects1.length = 0;
gdjs.Menu0Code.GDSoundObjects2.length = 0;
gdjs.Menu0Code.GDSoundObjects3.length = 0;

gdjs.Menu0Code.eventsList2(runtimeScene);
return;

}

gdjs['Menu0Code'] = gdjs.Menu0Code;
