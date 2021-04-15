gdjs.ScoreCode = {};
gdjs.ScoreCode.GDNewGameObjects1= [];
gdjs.ScoreCode.GDNewGameObjects2= [];
gdjs.ScoreCode.GDNewGameObjects3= [];
gdjs.ScoreCode.GDRatingObjects1= [];
gdjs.ScoreCode.GDRatingObjects2= [];
gdjs.ScoreCode.GDRatingObjects3= [];
gdjs.ScoreCode.GDRectGreenObjects1= [];
gdjs.ScoreCode.GDRectGreenObjects2= [];
gdjs.ScoreCode.GDRectGreenObjects3= [];
gdjs.ScoreCode.GDRectOrangeObjects1= [];
gdjs.ScoreCode.GDRectOrangeObjects2= [];
gdjs.ScoreCode.GDRectOrangeObjects3= [];
gdjs.ScoreCode.GDRectLeftObjects1= [];
gdjs.ScoreCode.GDRectLeftObjects2= [];
gdjs.ScoreCode.GDRectLeftObjects3= [];
gdjs.ScoreCode.GDRectRightObjects1= [];
gdjs.ScoreCode.GDRectRightObjects2= [];
gdjs.ScoreCode.GDRectRightObjects3= [];
gdjs.ScoreCode.GDStarObjects1= [];
gdjs.ScoreCode.GDStarObjects2= [];
gdjs.ScoreCode.GDStarObjects3= [];
gdjs.ScoreCode.GDScoreObjects1= [];
gdjs.ScoreCode.GDScoreObjects2= [];
gdjs.ScoreCode.GDScoreObjects3= [];
gdjs.ScoreCode.GDAchivmentObjects1= [];
gdjs.ScoreCode.GDAchivmentObjects2= [];
gdjs.ScoreCode.GDAchivmentObjects3= [];
gdjs.ScoreCode.GDViewAchivmentObjects1= [];
gdjs.ScoreCode.GDViewAchivmentObjects2= [];
gdjs.ScoreCode.GDViewAchivmentObjects3= [];
gdjs.ScoreCode.GDBackObjects1= [];
gdjs.ScoreCode.GDBackObjects2= [];
gdjs.ScoreCode.GDBackObjects3= [];
gdjs.ScoreCode.GDAchivmentTextViewObjects1= [];
gdjs.ScoreCode.GDAchivmentTextViewObjects2= [];
gdjs.ScoreCode.GDAchivmentTextViewObjects3= [];
gdjs.ScoreCode.GDSoundObjects1= [];
gdjs.ScoreCode.GDSoundObjects2= [];
gdjs.ScoreCode.GDSoundObjects3= [];

gdjs.ScoreCode.conditionTrue_0 = {val:false};
gdjs.ScoreCode.condition0IsTrue_0 = {val:false};
gdjs.ScoreCode.condition1IsTrue_0 = {val:false};
gdjs.ScoreCode.condition2IsTrue_0 = {val:false};
gdjs.ScoreCode.conditionTrue_1 = {val:false};
gdjs.ScoreCode.condition0IsTrue_1 = {val:false};
gdjs.ScoreCode.condition1IsTrue_1 = {val:false};
gdjs.ScoreCode.condition2IsTrue_1 = {val:false};


gdjs.ScoreCode.mapOfGDgdjs_46ScoreCode_46GDNewGameObjects1Objects = Hashtable.newFrom({"NewGame": gdjs.ScoreCode.GDNewGameObjects1});gdjs.ScoreCode.eventsList0 = function(runtimeScene) {

{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ScoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};gdjs.ScoreCode.mapOfGDgdjs_46ScoreCode_46GDRatingObjects1Objects = Hashtable.newFrom({"Rating": gdjs.ScoreCode.GDRatingObjects1});gdjs.ScoreCode.eventsList1 = function(runtimeScene) {

{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ScoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rating", false);
}}

}


};gdjs.ScoreCode.eventsList2 = function(runtimeScene) {

{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ScoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 30;
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {
}

}


{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
{gdjs.ScoreCode.conditionTrue_1 = gdjs.ScoreCode.condition0IsTrue_0;
gdjs.ScoreCode.condition0IsTrue_1.val = false;
gdjs.ScoreCode.condition1IsTrue_1.val = false;
{
gdjs.ScoreCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 30;
}if ( gdjs.ScoreCode.condition0IsTrue_1.val ) {
{
gdjs.ScoreCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 80;
}}
gdjs.ScoreCode.conditionTrue_1.val = true && gdjs.ScoreCode.condition0IsTrue_1.val && gdjs.ScoreCode.condition1IsTrue_1.val;
}
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AchivmentTextView"), gdjs.ScoreCode.GDAchivmentTextViewObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewAchivment"), gdjs.ScoreCode.GDViewAchivmentObjects2);
{for(var i = 0, len = gdjs.ScoreCode.GDViewAchivmentObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDViewAchivmentObjects2[i].setAnimationName("Sohay");
}
}{for(var i = 0, len = gdjs.ScoreCode.GDAchivmentTextViewObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDAchivmentTextViewObjects2[i].setAnimationName("2");
}
}{for(var i = 0, len = gdjs.ScoreCode.GDAchivmentTextViewObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDAchivmentTextViewObjects2[i].setX(425);
}
}}

}


{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
{gdjs.ScoreCode.conditionTrue_1 = gdjs.ScoreCode.condition0IsTrue_0;
gdjs.ScoreCode.condition0IsTrue_1.val = false;
gdjs.ScoreCode.condition1IsTrue_1.val = false;
{
gdjs.ScoreCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 80;
}if ( gdjs.ScoreCode.condition0IsTrue_1.val ) {
{
gdjs.ScoreCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 100;
}}
gdjs.ScoreCode.conditionTrue_1.val = true && gdjs.ScoreCode.condition0IsTrue_1.val && gdjs.ScoreCode.condition1IsTrue_1.val;
}
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AchivmentTextView"), gdjs.ScoreCode.GDAchivmentTextViewObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewAchivment"), gdjs.ScoreCode.GDViewAchivmentObjects2);
{for(var i = 0, len = gdjs.ScoreCode.GDViewAchivmentObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDViewAchivmentObjects2[i].setAnimationName("Busi");
}
}{for(var i = 0, len = gdjs.ScoreCode.GDAchivmentTextViewObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDAchivmentTextViewObjects2[i].setAnimationName("3");
}
}{for(var i = 0, len = gdjs.ScoreCode.GDAchivmentTextViewObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDAchivmentTextViewObjects2[i].setX(455);
}
}}

}


{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
{gdjs.ScoreCode.conditionTrue_1 = gdjs.ScoreCode.condition0IsTrue_0;
gdjs.ScoreCode.condition0IsTrue_1.val = false;
gdjs.ScoreCode.condition1IsTrue_1.val = false;
{
gdjs.ScoreCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
}if ( gdjs.ScoreCode.condition0IsTrue_1.val ) {
{
gdjs.ScoreCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 150;
}}
gdjs.ScoreCode.conditionTrue_1.val = true && gdjs.ScoreCode.condition0IsTrue_1.val && gdjs.ScoreCode.condition1IsTrue_1.val;
}
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AchivmentTextView"), gdjs.ScoreCode.GDAchivmentTextViewObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewAchivment"), gdjs.ScoreCode.GDViewAchivmentObjects2);
{for(var i = 0, len = gdjs.ScoreCode.GDViewAchivmentObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDViewAchivmentObjects2[i].setAnimationName("Samuray");
}
}{for(var i = 0, len = gdjs.ScoreCode.GDAchivmentTextViewObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDAchivmentTextViewObjects2[i].setAnimationName("4");
}
}{for(var i = 0, len = gdjs.ScoreCode.GDAchivmentTextViewObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDAchivmentTextViewObjects2[i].setX(455);
}
}}

}


{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ScoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 150;
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AchivmentTextView"), gdjs.ScoreCode.GDAchivmentTextViewObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewAchivment"), gdjs.ScoreCode.GDViewAchivmentObjects2);
{for(var i = 0, len = gdjs.ScoreCode.GDViewAchivmentObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDViewAchivmentObjects2[i].setAnimationName("TrashNinja");
}
}{for(var i = 0, len = gdjs.ScoreCode.GDAchivmentTextViewObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDAchivmentTextViewObjects2[i].setAnimationName("5");
}
}{for(var i = 0, len = gdjs.ScoreCode.GDAchivmentTextViewObjects2.length ;i < len;++i) {
    gdjs.ScoreCode.GDAchivmentTextViewObjects2[i].setX(354);
}
}}

}


{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ScoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "start.mp3", 1, true, 100, 1);
}}

}


{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ScoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "";
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("UnknownNinja");
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}}

}


};gdjs.ScoreCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewGame"), gdjs.ScoreCode.GDNewGameObjects1);

gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ScoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ScoreCode.mapOfGDgdjs_46ScoreCode_46GDNewGameObjects1Objects, runtimeScene, true, false);
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ScoreCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rating"), gdjs.ScoreCode.GDRatingObjects1);

gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ScoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ScoreCode.mapOfGDgdjs_46ScoreCode_46GDRatingObjects1Objects, runtimeScene, true, false);
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ScoreCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ScoreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ScoreCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
gdjs.ScoreCode.condition1IsTrue_0.val = false;
{
gdjs.ScoreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "Score");
}if ( gdjs.ScoreCode.condition0IsTrue_0.val ) {
{
gdjs.ScoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}}
if (gdjs.ScoreCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.ScoreCode.GDScoreObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(9).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + "_" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 100000)));
}{for(var i = 0, len = gdjs.ScoreCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.ScoreCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.network.sendAsyncRequest("https://kolibri.net.ru/insert_user.php", "user=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + "&points=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) + "&user_unique=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)) + "&token=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)), "POST", "", gdjs.VariablesContainer.badVariable, runtimeScene.getVariables().get("ErrorRequest"));
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}}

}


};

gdjs.ScoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ScoreCode.GDNewGameObjects1.length = 0;
gdjs.ScoreCode.GDNewGameObjects2.length = 0;
gdjs.ScoreCode.GDNewGameObjects3.length = 0;
gdjs.ScoreCode.GDRatingObjects1.length = 0;
gdjs.ScoreCode.GDRatingObjects2.length = 0;
gdjs.ScoreCode.GDRatingObjects3.length = 0;
gdjs.ScoreCode.GDRectGreenObjects1.length = 0;
gdjs.ScoreCode.GDRectGreenObjects2.length = 0;
gdjs.ScoreCode.GDRectGreenObjects3.length = 0;
gdjs.ScoreCode.GDRectOrangeObjects1.length = 0;
gdjs.ScoreCode.GDRectOrangeObjects2.length = 0;
gdjs.ScoreCode.GDRectOrangeObjects3.length = 0;
gdjs.ScoreCode.GDRectLeftObjects1.length = 0;
gdjs.ScoreCode.GDRectLeftObjects2.length = 0;
gdjs.ScoreCode.GDRectLeftObjects3.length = 0;
gdjs.ScoreCode.GDRectRightObjects1.length = 0;
gdjs.ScoreCode.GDRectRightObjects2.length = 0;
gdjs.ScoreCode.GDRectRightObjects3.length = 0;
gdjs.ScoreCode.GDStarObjects1.length = 0;
gdjs.ScoreCode.GDStarObjects2.length = 0;
gdjs.ScoreCode.GDStarObjects3.length = 0;
gdjs.ScoreCode.GDScoreObjects1.length = 0;
gdjs.ScoreCode.GDScoreObjects2.length = 0;
gdjs.ScoreCode.GDScoreObjects3.length = 0;
gdjs.ScoreCode.GDAchivmentObjects1.length = 0;
gdjs.ScoreCode.GDAchivmentObjects2.length = 0;
gdjs.ScoreCode.GDAchivmentObjects3.length = 0;
gdjs.ScoreCode.GDViewAchivmentObjects1.length = 0;
gdjs.ScoreCode.GDViewAchivmentObjects2.length = 0;
gdjs.ScoreCode.GDViewAchivmentObjects3.length = 0;
gdjs.ScoreCode.GDBackObjects1.length = 0;
gdjs.ScoreCode.GDBackObjects2.length = 0;
gdjs.ScoreCode.GDBackObjects3.length = 0;
gdjs.ScoreCode.GDAchivmentTextViewObjects1.length = 0;
gdjs.ScoreCode.GDAchivmentTextViewObjects2.length = 0;
gdjs.ScoreCode.GDAchivmentTextViewObjects3.length = 0;
gdjs.ScoreCode.GDSoundObjects1.length = 0;
gdjs.ScoreCode.GDSoundObjects2.length = 0;
gdjs.ScoreCode.GDSoundObjects3.length = 0;

gdjs.ScoreCode.eventsList3(runtimeScene);
return;

}

gdjs['ScoreCode'] = gdjs.ScoreCode;
