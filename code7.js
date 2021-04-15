gdjs.RatingCode = {};
gdjs.RatingCode.GDRectObjects1= [];
gdjs.RatingCode.GDRectObjects2= [];
gdjs.RatingCode.GDtopObjects1= [];
gdjs.RatingCode.GDtopObjects2= [];
gdjs.RatingCode.GDRatingTextObjects1= [];
gdjs.RatingCode.GDRatingTextObjects2= [];
gdjs.RatingCode.GDNewGameObjects1= [];
gdjs.RatingCode.GDNewGameObjects2= [];
gdjs.RatingCode.GDBackObjects1= [];
gdjs.RatingCode.GDBackObjects2= [];
gdjs.RatingCode.GDUserName1Objects1= [];
gdjs.RatingCode.GDUserName1Objects2= [];
gdjs.RatingCode.GDNewObject2Objects1= [];
gdjs.RatingCode.GDNewObject2Objects2= [];
gdjs.RatingCode.GDUser1Objects1= [];
gdjs.RatingCode.GDUser1Objects2= [];
gdjs.RatingCode.GDUserPoints1Objects1= [];
gdjs.RatingCode.GDUserPoints1Objects2= [];

gdjs.RatingCode.conditionTrue_0 = {val:false};
gdjs.RatingCode.condition0IsTrue_0 = {val:false};
gdjs.RatingCode.condition1IsTrue_0 = {val:false};
gdjs.RatingCode.condition2IsTrue_0 = {val:false};
gdjs.RatingCode.conditionTrue_1 = {val:false};
gdjs.RatingCode.condition0IsTrue_1 = {val:false};
gdjs.RatingCode.condition1IsTrue_1 = {val:false};
gdjs.RatingCode.condition2IsTrue_1 = {val:false};


gdjs.RatingCode.mapOfGDgdjs_46RatingCode_46GDNewGameObjects1Objects = Hashtable.newFrom({"NewGame": gdjs.RatingCode.GDNewGameObjects1});gdjs.RatingCode.eventsList0 = function(runtimeScene) {

{


gdjs.RatingCode.condition0IsTrue_0.val = false;
{
gdjs.RatingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.RatingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};gdjs.RatingCode.eventsList1 = function(runtimeScene) {

{


gdjs.RatingCode.condition0IsTrue_0.val = false;
gdjs.RatingCode.condition1IsTrue_0.val = false;
{
gdjs.RatingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Rating");
}if ( gdjs.RatingCode.condition0IsTrue_0.val ) {
{
{gdjs.RatingCode.conditionTrue_1 = gdjs.RatingCode.condition1IsTrue_0;
gdjs.RatingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9168676);
}
}}
if (gdjs.RatingCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("UserName1"), gdjs.RatingCode.GDUserName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("UserPoints1"), gdjs.RatingCode.GDUserPoints1Objects1);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)), runtimeScene.getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs.RatingCode.GDUserPoints1Objects1.length ;i < len;++i) {
    gdjs.RatingCode.GDUserPoints1Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2).getChild("0").getChild("points")));
}
}{for(var i = 0, len = gdjs.RatingCode.GDUserName1Objects1.length ;i < len;++i) {
    gdjs.RatingCode.GDUserName1Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2).getChild("0").getChild("name")));
}
}}

}


};gdjs.RatingCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewGame"), gdjs.RatingCode.GDNewGameObjects1);

gdjs.RatingCode.condition0IsTrue_0.val = false;
{
gdjs.RatingCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RatingCode.mapOfGDgdjs_46RatingCode_46GDNewGameObjects1Objects, runtimeScene, true, false);
}if (gdjs.RatingCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RatingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.RatingCode.condition0IsTrue_0.val = false;
{
gdjs.RatingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RatingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("http://193.176.79.213/leaderboarder.php", "", "GET", "", runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().getFromIndex(1));
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "start.wav", 1, true, 100, 1);
}}

}


{


{

{ //Subevents
gdjs.RatingCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.RatingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RatingCode.GDRectObjects1.length = 0;
gdjs.RatingCode.GDRectObjects2.length = 0;
gdjs.RatingCode.GDtopObjects1.length = 0;
gdjs.RatingCode.GDtopObjects2.length = 0;
gdjs.RatingCode.GDRatingTextObjects1.length = 0;
gdjs.RatingCode.GDRatingTextObjects2.length = 0;
gdjs.RatingCode.GDNewGameObjects1.length = 0;
gdjs.RatingCode.GDNewGameObjects2.length = 0;
gdjs.RatingCode.GDBackObjects1.length = 0;
gdjs.RatingCode.GDBackObjects2.length = 0;
gdjs.RatingCode.GDUserName1Objects1.length = 0;
gdjs.RatingCode.GDUserName1Objects2.length = 0;
gdjs.RatingCode.GDNewObject2Objects1.length = 0;
gdjs.RatingCode.GDNewObject2Objects2.length = 0;
gdjs.RatingCode.GDUser1Objects1.length = 0;
gdjs.RatingCode.GDUser1Objects2.length = 0;
gdjs.RatingCode.GDUserPoints1Objects1.length = 0;
gdjs.RatingCode.GDUserPoints1Objects2.length = 0;

gdjs.RatingCode.eventsList2(runtimeScene);
return;

}

gdjs['RatingCode'] = gdjs.RatingCode;
