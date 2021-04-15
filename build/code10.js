gdjs.Help1Code = {};
gdjs.Help1Code.GDBackgroundObjects1= [];
gdjs.Help1Code.GDBackgroundObjects2= [];
gdjs.Help1Code.GDBackgroundObjects3= [];
gdjs.Help1Code.GDBackButtonObjects1= [];
gdjs.Help1Code.GDBackButtonObjects2= [];
gdjs.Help1Code.GDBackButtonObjects3= [];
gdjs.Help1Code.GDOkObjects1= [];
gdjs.Help1Code.GDOkObjects2= [];
gdjs.Help1Code.GDOkObjects3= [];
gdjs.Help1Code.GDBoxObjects1= [];
gdjs.Help1Code.GDBoxObjects2= [];
gdjs.Help1Code.GDBoxObjects3= [];
gdjs.Help1Code.GDRectangleObjects1= [];
gdjs.Help1Code.GDRectangleObjects2= [];
gdjs.Help1Code.GDRectangleObjects3= [];
gdjs.Help1Code.GDIconObjects1= [];
gdjs.Help1Code.GDIconObjects2= [];
gdjs.Help1Code.GDIconObjects3= [];
gdjs.Help1Code.GDDescriptionObjects1= [];
gdjs.Help1Code.GDDescriptionObjects2= [];
gdjs.Help1Code.GDDescriptionObjects3= [];
gdjs.Help1Code.GDSoundObjects1= [];
gdjs.Help1Code.GDSoundObjects2= [];
gdjs.Help1Code.GDSoundObjects3= [];
gdjs.Help1Code.GDObjectObjects1= [];
gdjs.Help1Code.GDObjectObjects2= [];
gdjs.Help1Code.GDObjectObjects3= [];
gdjs.Help1Code.GDBackgroundGrayObjects1= [];
gdjs.Help1Code.GDBackgroundGrayObjects2= [];
gdjs.Help1Code.GDBackgroundGrayObjects3= [];

gdjs.Help1Code.conditionTrue_0 = {val:false};
gdjs.Help1Code.condition0IsTrue_0 = {val:false};
gdjs.Help1Code.condition1IsTrue_0 = {val:false};
gdjs.Help1Code.condition2IsTrue_0 = {val:false};


gdjs.Help1Code.mapOfGDgdjs_46Help1Code_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Help1Code.GDBackButtonObjects1});gdjs.Help1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.Help1Code.mapOfGDgdjs_46Help1Code_46GDOkObjects2Objects = Hashtable.newFrom({"Ok": gdjs.Help1Code.GDOkObjects2});gdjs.Help1Code.mapOfGDgdjs_46Help1Code_46GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.Help1Code.GDSoundObjects1});gdjs.Help1Code.eventsList1 = function(runtimeScene) {

{


gdjs.Help1Code.condition0IsTrue_0.val = false;
gdjs.Help1Code.condition1IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.Help1Code.condition0IsTrue_0.val ) {
{
gdjs.Help1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Help1Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Help1Code.GDSoundObjects1, gdjs.Help1Code.GDSoundObjects2);

{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{for(var i = 0, len = gdjs.Help1Code.GDSoundObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDSoundObjects2[i].setAnimationName("Off");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
gdjs.Help1Code.condition1IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Help1Code.condition0IsTrue_0.val ) {
{
gdjs.Help1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Help1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Help1Code.GDSoundObjects1 */
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{for(var i = 0, len = gdjs.Help1Code.GDSoundObjects1.length ;i < len;++i) {
    gdjs.Help1Code.GDSoundObjects1[i].setAnimationName("On");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.Help1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ok"), gdjs.Help1Code.GDOkObjects2);

gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Help1Code.mapOfGDgdjs_46Help1Code_46GDOkObjects2Objects, runtimeScene, true, false);
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.Help1Code.GDSoundObjects1);

gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Help1Code.mapOfGDgdjs_46Help1Code_46GDSoundObjects1Objects, runtimeScene, true, false);
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.Help1Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Help1Code.eventsList3 = function(runtimeScene) {

{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste16";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Банановая кожура относится к органическому мусору. Выбери бак для смешанных отходов!");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste10";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Куриная ножка относится к органическому мусору. Выбери бак для смешанных отходов!");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste17";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Корочка от пиццы относится к органическому мусору. Выбери бак для смешанных отходов!");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste18";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Чайный пакетик может вызвать сомнения. Если сомневаешься, выбирай смешанные отходы!");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste19";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Печенье оказалось невкусным? Баку для смешанных отходов оно понравится!");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste26";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Роллы, суши доедены, нигири тоже закончились. Значит, пора расстаться с палочками для еды — бак для смешанных отходов ждёт.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste33";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Использованный пластиковый нож не подлежит переработке — его ждёт бак для смешанных отходов.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste32";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Воспользовавшись пластиковой вилкой, выброси её в бак для смешанных отходов.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste34";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Не будем проверять, прав ли Нео, и ложки действительно нет, а просто выбросим её в бак для смешанных отходов.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste36";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Разбил тарелку? Это не только к счастью, а ещё к походу к серому баку для смешанных отходов.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste37";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Выпил кофе? Теперь энергии должно хватить на отправку капсулы в бак для смешанных отходов.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste3";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Вытер руки? Не забудь выбросить салфетку в бак для смешанных отходов!");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste21";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Если есть в кармане пачка сигарет, то рано или поздно она попадёт в бак для смешанных отходов.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste20";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Что суши, что вок —  рука ниндзя не дрогнет, отправляя упаковку в контейнер смешанных отходов.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste25";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Отправьте упаковку от чипсов в бак для смешанных отходов!.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste1";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("«Vogue» или «Playboy» — не важно, выброси ненужный журнал в бак для бумаг!");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste15";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Книга — источник знаний, а также сырья для вторичной переработки, если она попадёт в бак для бумаги.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste4";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("И гениальная курсовая, и квартальный отчёт рано или поздно станут макулатурой, место которой в баке для бумаги.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste38";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Всегда есть выбор: синий стикер или красный. Но после использования место для всех стикеров одно — бак для бумаг.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste40";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Бумага из шредера максимально готова быть выброшенной в бак для бумаг!");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste5";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Не знаешь, куда выкинуть газету? А мы не знаем, где ты её в 2021-м году нашел! Но точно знаем, где ей место — в баке для бумаг.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste22";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Задержался на планерке, и от пиццы остались только коробки? Отправь их голодным броском в бак для бумаг!");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste9";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Картонную коробку отправь в бак для бумаги!");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "waste11";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects2[i].setString("Не забудьте после окончания праздника о бумажных пакетах из-под подарков, отнесите их в бак для бумаги.");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.Help1Code.GDSoundObjects2);
{for(var i = 0, len = gdjs.Help1Code.GDSoundObjects2.length ;i < len;++i) {
    gdjs.Help1Code.GDSoundObjects2[i].setAnimationName("On");
}
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.Help1Code.GDSoundObjects1);
{for(var i = 0, len = gdjs.Help1Code.GDSoundObjects1.length ;i < len;++i) {
    gdjs.Help1Code.GDSoundObjects1[i].setAnimationName("Off");
}
}}

}


};gdjs.Help1Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Help1Code.GDBackButtonObjects1);

gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Help1Code.mapOfGDgdjs_46Help1Code_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Help1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Help1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Help1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Help1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Help1Code.GDBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon"), gdjs.Help1Code.GDIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("Object"), gdjs.Help1Code.GDObjectObjects1);
{for(var i = 0, len = gdjs.Help1Code.GDBoxObjects1.length ;i < len;++i) {
    gdjs.Help1Code.GDBoxObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.Help1Code.GDIconObjects1.length ;i < len;++i) {
    gdjs.Help1Code.GDIconObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.Help1Code.GDObjectObjects1.length ;i < len;++i) {
    gdjs.Help1Code.GDObjectObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}
{ //Subevents
gdjs.Help1Code.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Help1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Help1Code.GDBackgroundObjects1.length = 0;
gdjs.Help1Code.GDBackgroundObjects2.length = 0;
gdjs.Help1Code.GDBackgroundObjects3.length = 0;
gdjs.Help1Code.GDBackButtonObjects1.length = 0;
gdjs.Help1Code.GDBackButtonObjects2.length = 0;
gdjs.Help1Code.GDBackButtonObjects3.length = 0;
gdjs.Help1Code.GDOkObjects1.length = 0;
gdjs.Help1Code.GDOkObjects2.length = 0;
gdjs.Help1Code.GDOkObjects3.length = 0;
gdjs.Help1Code.GDBoxObjects1.length = 0;
gdjs.Help1Code.GDBoxObjects2.length = 0;
gdjs.Help1Code.GDBoxObjects3.length = 0;
gdjs.Help1Code.GDRectangleObjects1.length = 0;
gdjs.Help1Code.GDRectangleObjects2.length = 0;
gdjs.Help1Code.GDRectangleObjects3.length = 0;
gdjs.Help1Code.GDIconObjects1.length = 0;
gdjs.Help1Code.GDIconObjects2.length = 0;
gdjs.Help1Code.GDIconObjects3.length = 0;
gdjs.Help1Code.GDDescriptionObjects1.length = 0;
gdjs.Help1Code.GDDescriptionObjects2.length = 0;
gdjs.Help1Code.GDDescriptionObjects3.length = 0;
gdjs.Help1Code.GDSoundObjects1.length = 0;
gdjs.Help1Code.GDSoundObjects2.length = 0;
gdjs.Help1Code.GDSoundObjects3.length = 0;
gdjs.Help1Code.GDObjectObjects1.length = 0;
gdjs.Help1Code.GDObjectObjects2.length = 0;
gdjs.Help1Code.GDObjectObjects3.length = 0;
gdjs.Help1Code.GDBackgroundGrayObjects1.length = 0;
gdjs.Help1Code.GDBackgroundGrayObjects2.length = 0;
gdjs.Help1Code.GDBackgroundGrayObjects3.length = 0;

gdjs.Help1Code.eventsList4(runtimeScene);
return;

}

gdjs['Help1Code'] = gdjs.Help1Code;
