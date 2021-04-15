gdjs.HelpCode = {};
gdjs.HelpCode.GDBackgroundObjects1= [];
gdjs.HelpCode.GDBackgroundObjects2= [];
gdjs.HelpCode.GDBackgroundObjects3= [];
gdjs.HelpCode.GDBackButtonObjects1= [];
gdjs.HelpCode.GDBackButtonObjects2= [];
gdjs.HelpCode.GDBackButtonObjects3= [];
gdjs.HelpCode.GDOkObjects1= [];
gdjs.HelpCode.GDOkObjects2= [];
gdjs.HelpCode.GDOkObjects3= [];
gdjs.HelpCode.GDOkTextObjects1= [];
gdjs.HelpCode.GDOkTextObjects2= [];
gdjs.HelpCode.GDOkTextObjects3= [];
gdjs.HelpCode.GDRectangleObjects1= [];
gdjs.HelpCode.GDRectangleObjects2= [];
gdjs.HelpCode.GDRectangleObjects3= [];
gdjs.HelpCode.GDBoxObjects1= [];
gdjs.HelpCode.GDBoxObjects2= [];
gdjs.HelpCode.GDBoxObjects3= [];
gdjs.HelpCode.GDiconObjects1= [];
gdjs.HelpCode.GDiconObjects2= [];
gdjs.HelpCode.GDiconObjects3= [];
gdjs.HelpCode.GDDescriptionObjects1= [];
gdjs.HelpCode.GDDescriptionObjects2= [];
gdjs.HelpCode.GDDescriptionObjects3= [];
gdjs.HelpCode.GDObjectObjects1= [];
gdjs.HelpCode.GDObjectObjects2= [];
gdjs.HelpCode.GDObjectObjects3= [];
gdjs.HelpCode.GDSoundObjects1= [];
gdjs.HelpCode.GDSoundObjects2= [];
gdjs.HelpCode.GDSoundObjects3= [];

gdjs.HelpCode.conditionTrue_0 = {val:false};
gdjs.HelpCode.condition0IsTrue_0 = {val:false};
gdjs.HelpCode.condition1IsTrue_0 = {val:false};


gdjs.HelpCode.mapOfGDgdjs_46HelpCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.HelpCode.GDBackButtonObjects1});gdjs.HelpCode.eventsList0 = function(runtimeScene) {

{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.HelpCode.eventsList1 = function(runtimeScene) {

{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Glass0";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Молоко допито, остался лишь пакет Tetra Pak? Бросай его в бак для стекла-металла-тетрапака");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Glass1";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Истина в вине, а вино — в бутылке из стекла. Пустой винной бутылке прямая дорога в бак для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Glass4";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Не важно вкусной или нет оказалась консерва, главное точно знать, что консервной банке место в баке для стекла-металла-тетрапака.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Glass3";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Энергетик закончился, а банке из-под него самое место в баке для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Glass2";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Выпил сок — пакет из-под него опусти в бак для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Glass5";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("После посещения «БарКаса» отправь пустой стаканчик в бак для стекла, металла и тетрапака!");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Glass6";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Утолив жажду, отправь стакан в контейнер для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Glass7";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Шоколадка быстро закончилась, фольга осталась. Не забудьте выбросить её в бак для стекла, металла и тетрапака!");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Plastic0";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Пакет с мандаринками, пакет с яблоками, пакет с зеленью для салата. Как только освободишь их, выброси в контейнер для пластика.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Plastic1";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Пластиковый контейнер отправь на переработку, выбрав бак для пластика.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Plastic2";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Йогурт доеден до дна? Перепроверь и выброси в оранжевый бак для пластиковых отходов.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Plastic3";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Допит последний глоток любимой газировки? Бак для пластика ждёт с нетерпением пополнения.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Plastic4";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Пластиковый стаканчик отслужил свою службу, и теперь его ждёт бак для пластика.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Plastic5";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Чтобы вкусное ты не пил из пластиковой кружки, после использования бросай её в бак для пластика.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Plastic6";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Еда на тарелке закончилась? Значит пора самой тарелке в бак для пластика.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Plastic7";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects2[i].setString("Пообедал? Не забудь выбросить пластиковую тарелку в контейнер для пластика.");
}
}}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Plastic8";
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.HelpCode.GDDescriptionObjects1);
{for(var i = 0, len = gdjs.HelpCode.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.HelpCode.GDDescriptionObjects1[i].setString("Маленькую пластиковую бутылку отправь в оранжевый бак для пластика!");
}
}}

}


};gdjs.HelpCode.mapOfGDgdjs_46HelpCode_46GDOkObjects1Objects = Hashtable.newFrom({"Ok": gdjs.HelpCode.GDOkObjects1});gdjs.HelpCode.eventsList2 = function(runtimeScene) {

{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.HelpCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.HelpCode.GDBackButtonObjects1);

gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HelpCode.mapOfGDgdjs_46HelpCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.HelpCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HelpCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HelpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.HelpCode.GDBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Object"), gdjs.HelpCode.GDObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.HelpCode.GDiconObjects1);
{for(var i = 0, len = gdjs.HelpCode.GDObjectObjects1.length ;i < len;++i) {
    gdjs.HelpCode.GDObjectObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.HelpCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.HelpCode.GDiconObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.HelpCode.GDBoxObjects1.length ;i < len;++i) {
    gdjs.HelpCode.GDBoxObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}
{ //Subevents
gdjs.HelpCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ok"), gdjs.HelpCode.GDOkObjects1);

gdjs.HelpCode.condition0IsTrue_0.val = false;
{
gdjs.HelpCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HelpCode.mapOfGDgdjs_46HelpCode_46GDOkObjects1Objects, runtimeScene, true, false);
}if (gdjs.HelpCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HelpCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.HelpCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HelpCode.GDBackgroundObjects1.length = 0;
gdjs.HelpCode.GDBackgroundObjects2.length = 0;
gdjs.HelpCode.GDBackgroundObjects3.length = 0;
gdjs.HelpCode.GDBackButtonObjects1.length = 0;
gdjs.HelpCode.GDBackButtonObjects2.length = 0;
gdjs.HelpCode.GDBackButtonObjects3.length = 0;
gdjs.HelpCode.GDOkObjects1.length = 0;
gdjs.HelpCode.GDOkObjects2.length = 0;
gdjs.HelpCode.GDOkObjects3.length = 0;
gdjs.HelpCode.GDOkTextObjects1.length = 0;
gdjs.HelpCode.GDOkTextObjects2.length = 0;
gdjs.HelpCode.GDOkTextObjects3.length = 0;
gdjs.HelpCode.GDRectangleObjects1.length = 0;
gdjs.HelpCode.GDRectangleObjects2.length = 0;
gdjs.HelpCode.GDRectangleObjects3.length = 0;
gdjs.HelpCode.GDBoxObjects1.length = 0;
gdjs.HelpCode.GDBoxObjects2.length = 0;
gdjs.HelpCode.GDBoxObjects3.length = 0;
gdjs.HelpCode.GDiconObjects1.length = 0;
gdjs.HelpCode.GDiconObjects2.length = 0;
gdjs.HelpCode.GDiconObjects3.length = 0;
gdjs.HelpCode.GDDescriptionObjects1.length = 0;
gdjs.HelpCode.GDDescriptionObjects2.length = 0;
gdjs.HelpCode.GDDescriptionObjects3.length = 0;
gdjs.HelpCode.GDObjectObjects1.length = 0;
gdjs.HelpCode.GDObjectObjects2.length = 0;
gdjs.HelpCode.GDObjectObjects3.length = 0;
gdjs.HelpCode.GDSoundObjects1.length = 0;
gdjs.HelpCode.GDSoundObjects2.length = 0;
gdjs.HelpCode.GDSoundObjects3.length = 0;

gdjs.HelpCode.eventsList3(runtimeScene);
return;

}

gdjs['HelpCode'] = gdjs.HelpCode;
