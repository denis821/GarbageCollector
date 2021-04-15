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
gdjs.Help1Code.GDOkTextObjects1= [];
gdjs.Help1Code.GDOkTextObjects2= [];
gdjs.Help1Code.GDOkTextObjects3= [];
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

gdjs.Help1Code.conditionTrue_0 = {val:false};
gdjs.Help1Code.condition0IsTrue_0 = {val:false};
gdjs.Help1Code.condition1IsTrue_0 = {val:false};


gdjs.Help1Code.mapOfGDgdjs_46Help1Code_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Help1Code.GDBackButtonObjects1});gdjs.Help1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.Help1Code.mapOfGDgdjs_46Help1Code_46GDOkObjects1Objects = Hashtable.newFrom({"Ok": gdjs.Help1Code.GDOkObjects1});gdjs.Help1Code.eventsList1 = function(runtimeScene) {

{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.Help1Code.eventsList2 = function(runtimeScene) {

{


gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other0";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other1";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other2";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other3";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other4";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other5";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other6";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other7";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other8";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other9";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other10";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other11";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other12";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other13";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Other14";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Paper0";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Paper1";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Paper2";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Paper3";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Paper4";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Paper5";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Paper6";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Paper7";
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
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Paper8";
}if (gdjs.Help1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Help1Code.GDDescriptionObjects1);
{for(var i = 0, len = gdjs.Help1Code.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.Help1Code.GDDescriptionObjects1[i].setString("Не забудьте после окончания праздника о бумажных пакетах из-под подарков, отнесите их в бак для бумаги.");
}
}}

}


};gdjs.Help1Code.eventsList3 = function(runtimeScene) {

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


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ok"), gdjs.Help1Code.GDOkObjects1);

gdjs.Help1Code.condition0IsTrue_0.val = false;
{
gdjs.Help1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Help1Code.mapOfGDgdjs_46Help1Code_46GDOkObjects1Objects, runtimeScene, true, false);
}if (gdjs.Help1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Help1Code.eventsList1(runtimeScene);} //End of subevents
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
gdjs.Help1Code.eventsList2(runtimeScene);} //End of subevents
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
gdjs.Help1Code.GDOkTextObjects1.length = 0;
gdjs.Help1Code.GDOkTextObjects2.length = 0;
gdjs.Help1Code.GDOkTextObjects3.length = 0;
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

gdjs.Help1Code.eventsList3(runtimeScene);
return;

}

gdjs['Help1Code'] = gdjs.Help1Code;
