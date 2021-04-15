gdjs.WikiCode = {};
gdjs.WikiCode.GDFormObjects1= [];
gdjs.WikiCode.GDFormObjects2= [];
gdjs.WikiCode.GDFormObjects3= [];
gdjs.WikiCode.GDFormObjects4= [];
gdjs.WikiCode.GDFormObjects5= [];
gdjs.WikiCode.GDPrevPageObjects1= [];
gdjs.WikiCode.GDPrevPageObjects2= [];
gdjs.WikiCode.GDPrevPageObjects3= [];
gdjs.WikiCode.GDPrevPageObjects4= [];
gdjs.WikiCode.GDPrevPageObjects5= [];
gdjs.WikiCode.GDSoundObjects1= [];
gdjs.WikiCode.GDSoundObjects2= [];
gdjs.WikiCode.GDSoundObjects3= [];
gdjs.WikiCode.GDSoundObjects4= [];
gdjs.WikiCode.GDSoundObjects5= [];
gdjs.WikiCode.GDRectangleObjects1= [];
gdjs.WikiCode.GDRectangleObjects2= [];
gdjs.WikiCode.GDRectangleObjects3= [];
gdjs.WikiCode.GDRectangleObjects4= [];
gdjs.WikiCode.GDRectangleObjects5= [];
gdjs.WikiCode.GDWasteObjects1= [];
gdjs.WikiCode.GDWasteObjects2= [];
gdjs.WikiCode.GDWasteObjects3= [];
gdjs.WikiCode.GDWasteObjects4= [];
gdjs.WikiCode.GDWasteObjects5= [];
gdjs.WikiCode.GDNextObjects1= [];
gdjs.WikiCode.GDNextObjects2= [];
gdjs.WikiCode.GDNextObjects3= [];
gdjs.WikiCode.GDNextObjects4= [];
gdjs.WikiCode.GDNextObjects5= [];
gdjs.WikiCode.GDPrevObjects1= [];
gdjs.WikiCode.GDPrevObjects2= [];
gdjs.WikiCode.GDPrevObjects3= [];
gdjs.WikiCode.GDPrevObjects4= [];
gdjs.WikiCode.GDPrevObjects5= [];
gdjs.WikiCode.GDIconObjects1= [];
gdjs.WikiCode.GDIconObjects2= [];
gdjs.WikiCode.GDIconObjects3= [];
gdjs.WikiCode.GDIconObjects4= [];
gdjs.WikiCode.GDIconObjects5= [];
gdjs.WikiCode.GDOtherObjects1= [];
gdjs.WikiCode.GDOtherObjects2= [];
gdjs.WikiCode.GDOtherObjects3= [];
gdjs.WikiCode.GDOtherObjects4= [];
gdjs.WikiCode.GDOtherObjects5= [];
gdjs.WikiCode.GDTetrapakObjects1= [];
gdjs.WikiCode.GDTetrapakObjects2= [];
gdjs.WikiCode.GDTetrapakObjects3= [];
gdjs.WikiCode.GDTetrapakObjects4= [];
gdjs.WikiCode.GDTetrapakObjects5= [];
gdjs.WikiCode.GDPaperObjects1= [];
gdjs.WikiCode.GDPaperObjects2= [];
gdjs.WikiCode.GDPaperObjects3= [];
gdjs.WikiCode.GDPaperObjects4= [];
gdjs.WikiCode.GDPaperObjects5= [];
gdjs.WikiCode.GDPlasticObjects1= [];
gdjs.WikiCode.GDPlasticObjects2= [];
gdjs.WikiCode.GDPlasticObjects3= [];
gdjs.WikiCode.GDPlasticObjects4= [];
gdjs.WikiCode.GDPlasticObjects5= [];
gdjs.WikiCode.GDDescriptionObjects1= [];
gdjs.WikiCode.GDDescriptionObjects2= [];
gdjs.WikiCode.GDDescriptionObjects3= [];
gdjs.WikiCode.GDDescriptionObjects4= [];
gdjs.WikiCode.GDDescriptionObjects5= [];

gdjs.WikiCode.conditionTrue_0 = {val:false};
gdjs.WikiCode.condition0IsTrue_0 = {val:false};
gdjs.WikiCode.condition1IsTrue_0 = {val:false};


gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDPrevPageObjects1Objects = Hashtable.newFrom({"PrevPage": gdjs.WikiCode.GDPrevPageObjects1});gdjs.WikiCode.eventsList0 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ModeMenu", false);
}}

}


};gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.WikiCode.GDNextObjects1});gdjs.WikiCode.eventsList1 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Алюминий, из которого изготавливают банки для популярных напитков, почти на 90% перерабатываемый материал. Такие банки должны попасть в бак для стекла-металла-тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Фольга, в которой вы запекали мясо, или которая осталась вам в память о вкусной шоколадке, отправится в один и тот же бак: для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Ламинированный стакан сделан из картона и плёнки. Раньше такие стаканчики не перерабатывали, а теперь его можно бросать в бак для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Любимый стакан из «БарКаса» сделан из бумаги и покрыт пластиковой плёнкой. Раньше такие стаканчики не перерабатывали, а теперь его можно бросать в бак для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Консервная банка изготавливается из жести — практически полностью перерабатываемого материала. Поэтому стоит убедиться, чтобы она попала в правильный бак — для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Винная бутылка произведена из стекла, а стекло — полностью перерабатываемый материал с безотходным процессом. Убедись, что бутылка после использования попала в бак для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Тетрапак-пакет, в котором был сок, производится из картона, пластиковой плёнки и фольги. Убедись, что после использования он попал в бак для стекла-металла-тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
gdjs.copyArray(gdjs.WikiCode.GDWasteObjects2, gdjs.WikiCode.GDWasteObjects3);

{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пакет для молока сделан из трёх компонентов: картон, пластиковая плёнка и фольга. Такая упаковка называется «тетрапак», поэтому выбор однозначен — бак для стекла, металла и тетрапака.");
}
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects3[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


};gdjs.WikiCode.eventsList2 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Всё, что попадёт в оранжевый бак для пластика, будет использовано для вторичного производства изделий из пластика. Поэтому место маленькой пластиковой бутылки именно здесь.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Пластиковый стаканчик сделан из перерабатываемого пластика. Дай ему шанс реинкарнироваться опять в стаканчик, или в ручку, или в футболку — брось в бак для пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Пластиковая кружка произведена из перерабатываемого пластика. Подари ей вторую жизнь — опусти в бак для пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Подари тарелке вторую жизнь, быть может она превратится в стул или стол, а может — в красивый ковёр. Ведь она сделана из перерабатываемого пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Пластиковая тарелка производится из полипропилена и подлежит переработке. Кто знает, возможно, она ещё не раз встретится с тобой в этом облике — главное, не забыть отправить её в бак для пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Не важно персиковый или ананасовый был йогурт, баночке из-под него место в баке для пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Пластиковый контейнер производится из перерабатываемого пластика. Не забудьте отправить его на переработку, выбрав бак для пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects4);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects4.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects4[i].setString("Полиэтиленовые пакеты переживут всех нас. Так пусть это будут новые пакеты, или пластиковая мебель, или что-то ещё полезное — брось пакет в бак для пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
gdjs.copyArray(gdjs.WikiCode.GDWasteObjects2, gdjs.WikiCode.GDWasteObjects3);

{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Бутылки для напитков производятся из полиэтилентерефталата или поликарбоната. Их следует помещать в баки для пластика для дальнейшей переработки и повторного производства таких же бутылок.");
}
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects3[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


};gdjs.WikiCode.eventsList3 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Куриная ножка относится к органическим, пищевым отходам. Её следует класть в корзину для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Чайный пакетик можно отнести к разным категориям отходов. Он содержит как органический чай, так бумажную или пластиковую оболочку. Лучшее место для него — бак для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Любые недоеденные хлебобулочные изделия относятся к органическим отходам. Иногда они могут быть вредны даже для птичек. Лучше всего отправить их в бак к смешанным отходам.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Всё равно, из чего ваши палочки для еды: из дерева или пластика — их следует выбрасывать в смешанные отходы.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пластиковый нож произведён из неперерабатываемого пластика. Поэтому правильный выбор — бак для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пластик, из которого произведена вилка, не подлежит переработке. Не задумываясь бросай её в контейнер для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пластиковая ложка произведена из неперерабатываемого пластика. Поэтому закончив есть рамен, не забудьте выбросить её в бак для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Тарелка может быть из керамики и фарфора, закалённого стекла или чего-то другого. Разбил — выкинь в бак для смешанных отходов. Может, именно её ищут уфологи.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Капсула с кофе – это тара, сделанная из пластика и/или алюминия с молотым кофе внутри. Поэтому отправляем её в контейнер для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 10;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Вытер руки — выкинь мусор в бак для смешанных отходов — вымой руки после мусора — вытри руки. Только уже не салфеткой: это серый бак, а не чёрная дыра!");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 11;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Что только не входит в состав упаковки от сигарет: картон, фольга, целлофан, ламинированное покрытие. Чтобы не ошибиться, выбросьте пачку в бак для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 12;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Хоть коробка от вока и сделана из картона, на ней наверняка остался терияки или другой соус, а также прочий органический мусор. Поэтому отправляем её в бак для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 13;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Упаковки от чипсов могут содержать неперерабатываемый пластик, картон, фольгу, ну и крошки от чипсов, конечно. Чтобы не ошибиться, бросай их в контейнер для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 14;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Корочка или даже целая пицца — это пищевой, органический мусор. Её следует класть в корзину для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 15;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
/* Reuse gdjs.WikiCode.GDWasteObjects2 */
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects2[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Успей выкинуть банановую кожуру, пока на ней кто-нибудь не поскользнулся! Так как это органический мусор, выбирай бак для смешанных отходов.");
}
}}

}


};gdjs.WikiCode.eventsList4 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "Tetrapak";
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "Plastic";
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "Other";
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.WikiCode.eventsList5 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Книга изготовлена из бумаги. Вы можете дать ей вторую жизнь, для этого выберите контейнер для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Один лист бумаги или целая кипа — место им в контейнере для бумаги. После переработки бумага получит вторую жизнь.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Использованный стикер поместите в контейнер для бумаги. Возможно, вы ещё встретитесь с ним в другой реинкарнации: книги, журнала или в виде туалетной бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Отходы от шредера уже готовы к переработке, дайте им шанс! Для этого сделайте правильный выбор — контейнер для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Отправив газету на переработку, вы обеспечите бумаге вторую жизнь. Именно поэтому ваш выбор — контейнер для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Хорошо вытряхните крошки из коробки от пиццы, и у вас в руках останется картон. Место ему в контейнере для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Коробка из доставки сделана из картона, так что ошибиться трудно — выбирайте бак для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Бумажный пакет способен обрести вторую жизнь, возможно даже, в качестве пакета. Главное, не забыть выкинуть его в бак для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Waste"), gdjs.WikiCode.GDWasteObjects1);
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects1[i].setString("Глянцевые журналы производятся из мелованной бумаги. Отправь их на переработку, поместив в контейнер для бумаги.");
}
}}

}


};gdjs.WikiCode.eventsList6 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Waste"), gdjs.WikiCode.GDWasteObjects2);
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects2[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}
{ //Subevents
gdjs.WikiCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "Paper";
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDPrevObjects1Objects = Hashtable.newFrom({"Prev": gdjs.WikiCode.GDPrevObjects1});gdjs.WikiCode.eventsList7 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пакет для молока сделан из трёх компонентов: картон, пластиковая плёнка и фольга. Такая упаковка называется «тетрапак», поэтому выбор однозначен — бак для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Алюминий, из которого изготавливают банки для популярных напитков, почти на 90% перерабатываемый материал. Такие банки должны попасть в бак для стекла-металла-тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Винная бутылка произведена из стекла, а стекло — полностью перерабатываемый материал с безотходным процессом. Убедись, что бутылка после использования попала в бак для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Консервная банка изготавливается из жести — практически полностью перерабатываемого материала. Поэтому стоит убедиться, чтобы она попала в правильный бак — для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Любимый стакан из «БарКаса» сделан из бумаги и покрыт пластиковой плёнкой. Раньше такие стаканчики не перерабатывали, а теперь его можно бросать в бак для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Ламинированный стакан сделан из картона и плёнки. Раньше такие стаканчики не перерабатывали, а теперь его можно бросать в бак для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Фольга, в которой вы запекали мясо, или которая осталась вам в память о вкусной шоколадке, отправится в один и тот же бак: для стекла, металла и тетрапака.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == -(1);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
gdjs.copyArray(gdjs.WikiCode.GDWasteObjects1, gdjs.WikiCode.GDWasteObjects3);

{runtimeScene.getVariables().getFromIndex(1).setNumber(7);
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Тетрапак-пакет, в котором был сок, производится из картона, пластиковой плёнки и фольги. Убедись, что после использования он попал в бак для стекла-металла-тетрапака.");
}
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects3[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{


{
}

}


};gdjs.WikiCode.eventsList8 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пластиковый контейнер производится из перерабатываемого пластика. Не забудьте отправить его на переработку, выбрав бак для пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Не важно персиковый или ананасовый был йогурт, баночке из-под него место в баке для пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пластиковая тарелка производится из полипропилена и подлежит переработке. Кто знает, возможно, она ещё не раз встретится с тобой в этом облике — главное, не забыть отправить её в бак для пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Подари тарелке вторую жизнь, быть может она превратится в стул или стол, а может — в красивый ковёр. Ведь она сделана из перерабатываемого пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пластиковая кружка произведена из перерабатываемого пластика. Подари ей вторую жизнь — опусти в бак для пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пластиковый стаканчик сделан из перерабатываемого пластика. Дай ему шанс реинкарнироваться опять в стаканчик, или в ручку, или в футболку — брось в бак для пластика.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Всё, что попадёт в оранжевый бак для пластика, будет использовано для вторичного производства изделий из пластика. Поэтому место маленькой пластиковой бутылки именно здесь.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Бутылки для напитков производятся из полиэтилентерефталата или поликарбоната. Их следует помещать в баки для пластика для дальнейшей переработки и повторного производства таких же бутылок.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == -(1);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
gdjs.copyArray(gdjs.WikiCode.GDWasteObjects1, gdjs.WikiCode.GDWasteObjects2);

{runtimeScene.getVariables().getFromIndex(1).setNumber(8);
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Полиэтиленовые пакеты переживут всех нас. Так пусть это будут новые пакеты, или пластиковая мебель, или что-то ещё полезное — брось пакет в бак для пластика.");
}
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects2[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


};gdjs.WikiCode.eventsList9 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 13;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Упаковки от чипсов могут содержать неперерабатываемый пластик, картон, фольгу, ну и крошки от чипсов, конечно. Чтобы не ошибиться, бросай их в контейнер для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 12;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Хоть коробка от вока и сделана из картона, на ней наверняка остался терияки или другой соус, а также прочий органический мусор. Поэтому отправляем её в бак для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 11;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Что только не входит в состав упаковки от сигарет: картон, фольга, целлофан, ламинированное покрытие. Чтобы не ошибиться, выбросьте пачку в бак для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 10;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Вытер руки — выкинь мусор в бак для смешанных отходов — вымой руки после мусора — вытри руки. Только уже не салфеткой: это серый бак, а не чёрная дыра!");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Капсула с кофе – это тара, сделанная из пластика и/или алюминия с молотым кофе внутри. Поэтому отправляем её в контейнер для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Тарелка может быть из керамики и фарфора, закалённого стекла или чего-то другого. Разбил — выкинь в бак для смешанных отходов. Может, именно её ищут уфологи.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пластиковая ложка произведена из неперерабатываемого пластика. Поэтому закончив есть рамен, не забудьте выбросить её в бак для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пластик, из которого произведена вилка, не подлежит переработке. Не задумываясь бросай её в контейнер для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Пластиковый нож произведён из неперерабатываемого пластика. Поэтому правильный выбор — бак для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Всё равно, из чего ваши палочки для еды: из дерева или пластика — их следует выбрасывать в смешанные отходы.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Любые недоеденные хлебобулочные изделия относятся к органическим отходам. Иногда они могут быть вредны даже для птичек. Лучше всего отправить их в бак к смешанным отходам.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Чайный пакетик можно отнести к разным категориям отходов. Он содержит как органический чай, так бумажную или пластиковую оболочку. Лучшее место для него — бак для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Куриная ножка относится к органическим, пищевым отходам. Её следует класть в корзину для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects3);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects3.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects3[i].setString("Успей выкинуть банановую кожуру, пока на ней кто-нибудь не поскользнулся! Так как это органический мусор, выбирай бак для смешанных отходов.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == -(1);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
gdjs.copyArray(gdjs.WikiCode.GDWasteObjects1, gdjs.WikiCode.GDWasteObjects2);

{runtimeScene.getVariables().getFromIndex(1).setNumber(14);
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects2[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Корочка или даже целая пицца — это пищевой, органический мусор. Её следует класть в корзину для смешанных отходов.");
}
}}

}


};gdjs.WikiCode.eventsList10 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Коробка из доставки сделана из картона, так что ошибиться трудно — выбирайте бак для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Хорошо вытряхните крошки из коробки от пиццы, и у вас в руках останется картон. Место ему в контейнере для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Отправив газету на переработку, вы обеспечите бумаге вторую жизнь. Именно поэтому ваш выбор — контейнер для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Отходы от шредера уже готовы к переработке, дайте им шанс! Для этого сделайте правильный выбор — контейнер для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Использованный стикер поместите в контейнер для бумаги. Возможно, вы ещё встретитесь с ним в другой реинкарнации: книги, журнала или в виде туалетной бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Один лист бумаги или целая кипа — место им в контейнере для бумаги. После переработки бумага получит вторую жизнь.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Книга изготовлена из бумаги. Вы можете дать ей вторую жизнь, для этого выберите контейнер для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects2);
{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects2.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects2[i].setString("Глянцевые журналы производятся из мелованной бумаги. Отправь их на переработку, поместив в контейнер для бумаги.");
}
}}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == -(1);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects1);
/* Reuse gdjs.WikiCode.GDWasteObjects1 */
{runtimeScene.getVariables().getFromIndex(1).setNumber(8);
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects1[i].setString("Бумажный пакет способен обрести вторую жизнь, возможно даже, в качестве пакета. Главное, не забыть выкинуть его в бак для бумаги.");
}
}}

}


};gdjs.WikiCode.eventsList11 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "Tetrapak";
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "Plastic";
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "Other";
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "Paper";
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.WikiCode.eventsList12 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Waste"), gdjs.WikiCode.GDWasteObjects1);
{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}
{ //Subevents
gdjs.WikiCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDOtherObjects1Objects = Hashtable.newFrom({"Other": gdjs.WikiCode.GDOtherObjects1});gdjs.WikiCode.eventsList13 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon"), gdjs.WikiCode.GDIconObjects1);
/* Reuse gdjs.WikiCode.GDOtherObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Paper"), gdjs.WikiCode.GDPaperObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plastic"), gdjs.WikiCode.GDPlasticObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tetrapak"), gdjs.WikiCode.GDTetrapakObjects1);
gdjs.copyArray(runtimeScene.getObjects("Waste"), gdjs.WikiCode.GDWasteObjects1);
{runtimeScene.getVariables().getFromIndex(0).setString("Other");
}{for(var i = 0, len = gdjs.WikiCode.GDIconObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDIconObjects1[i].setAnimationName("Other");
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects1[i].setString("Успей выкинуть банановую кожуру, пока на ней кто-нибудь не поскользнулся! Так как это органический мусор, выбирай бак для смешанных отходов.");
}
}{for(var i = 0, len = gdjs.WikiCode.GDOtherObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDOtherObjects1[i].setAnimationName("Big");
}
}{for(var i = 0, len = gdjs.WikiCode.GDTetrapakObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDTetrapakObjects1[i].setAnimationName("Small");
}
}{for(var i = 0, len = gdjs.WikiCode.GDPaperObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDPaperObjects1[i].setAnimationName("Small");
}
}{for(var i = 0, len = gdjs.WikiCode.GDPlasticObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDPlasticObjects1[i].setAnimationName("Small");
}
}}

}


};gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDTetrapakObjects1Objects = Hashtable.newFrom({"Tetrapak": gdjs.WikiCode.GDTetrapakObjects1});gdjs.WikiCode.eventsList14 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon"), gdjs.WikiCode.GDIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("Other"), gdjs.WikiCode.GDOtherObjects1);
gdjs.copyArray(runtimeScene.getObjects("Paper"), gdjs.WikiCode.GDPaperObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plastic"), gdjs.WikiCode.GDPlasticObjects1);
/* Reuse gdjs.WikiCode.GDTetrapakObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Waste"), gdjs.WikiCode.GDWasteObjects1);
{runtimeScene.getVariables().getFromIndex(0).setString("Tetrapak");
}{for(var i = 0, len = gdjs.WikiCode.GDIconObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDIconObjects1[i].setAnimationName("Tetrapak");
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects1[i].setString("Пакет для молока сделан из трёх компонентов: картон, пластиковая плёнка и фольга. Такая упаковка называется «тетрапак», поэтому выбор однозначен — бак для стекла, металла и тетрапака.");
}
}{for(var i = 0, len = gdjs.WikiCode.GDOtherObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDOtherObjects1[i].setAnimationName("Small");
}
}{for(var i = 0, len = gdjs.WikiCode.GDPaperObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDPaperObjects1[i].setAnimationName("Small");
}
}{for(var i = 0, len = gdjs.WikiCode.GDPlasticObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDPlasticObjects1[i].setAnimationName("Small");
}
}{for(var i = 0, len = gdjs.WikiCode.GDTetrapakObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDTetrapakObjects1[i].setAnimationName("Big");
}
}}

}


};gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDPaperObjects1Objects = Hashtable.newFrom({"Paper": gdjs.WikiCode.GDPaperObjects1});gdjs.WikiCode.eventsList15 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Icon"), gdjs.WikiCode.GDIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("Other"), gdjs.WikiCode.GDOtherObjects1);
/* Reuse gdjs.WikiCode.GDPaperObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Plastic"), gdjs.WikiCode.GDPlasticObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tetrapak"), gdjs.WikiCode.GDTetrapakObjects1);
gdjs.copyArray(runtimeScene.getObjects("Waste"), gdjs.WikiCode.GDWasteObjects1);
{runtimeScene.getVariables().getFromIndex(0).setString("Paper");
}{for(var i = 0, len = gdjs.WikiCode.GDIconObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDIconObjects1[i].setAnimationName("Paper");
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.WikiCode.GDOtherObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDOtherObjects1[i].setAnimationName("Small");
}
}{for(var i = 0, len = gdjs.WikiCode.GDTetrapakObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDTetrapakObjects1[i].setAnimationName("Small");
}
}{for(var i = 0, len = gdjs.WikiCode.GDPlasticObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDPlasticObjects1[i].setAnimationName("Small");
}
}{for(var i = 0, len = gdjs.WikiCode.GDPaperObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDPaperObjects1[i].setAnimationName("Big");
}
}}

}


};gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDPlasticObjects1Objects = Hashtable.newFrom({"Plastic": gdjs.WikiCode.GDPlasticObjects1});gdjs.WikiCode.eventsList16 = function(runtimeScene) {

{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon"), gdjs.WikiCode.GDIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("Other"), gdjs.WikiCode.GDOtherObjects1);
gdjs.copyArray(runtimeScene.getObjects("Paper"), gdjs.WikiCode.GDPaperObjects1);
/* Reuse gdjs.WikiCode.GDPlasticObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Tetrapak"), gdjs.WikiCode.GDTetrapakObjects1);
gdjs.copyArray(runtimeScene.getObjects("Waste"), gdjs.WikiCode.GDWasteObjects1);
{runtimeScene.getVariables().getFromIndex(0).setString("Plastic");
}{for(var i = 0, len = gdjs.WikiCode.GDIconObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDIconObjects1[i].setAnimationName("Plastic");
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.WikiCode.GDWasteObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDWasteObjects1[i].setAnimationName(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects1[i].setString("Бутылки для напитков производятся из полиэтилентерефталата или поликарбоната. Их следует помещать в баки для пластика для дальнейшей переработки и повторного производства таких же бутылок.");
}
}{for(var i = 0, len = gdjs.WikiCode.GDOtherObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDOtherObjects1[i].setAnimationName("Small");
}
}{for(var i = 0, len = gdjs.WikiCode.GDTetrapakObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDTetrapakObjects1[i].setAnimationName("Small");
}
}{for(var i = 0, len = gdjs.WikiCode.GDPaperObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDPaperObjects1[i].setAnimationName("Small");
}
}{for(var i = 0, len = gdjs.WikiCode.GDPlasticObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDPlasticObjects1[i].setAnimationName("Big");
}
}}

}


};gdjs.WikiCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PrevPage"), gdjs.WikiCode.GDPrevPageObjects1);

gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDPrevPageObjects1Objects, runtimeScene, true, false);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.WikiCode.GDDescriptionObjects1);
{runtimeScene.getVariables().getFromIndex(0).setString("Tetrapak");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.WikiCode.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.WikiCode.GDDescriptionObjects1[i].setString("Пакет для молока сделан из трёх компонентов: картон, пластиковая плёнка и фольга. Такая упаковка называется «тетрапак», поэтому выбор однозначен — бак для стекла, металла и тетрапака.");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.WikiCode.GDNextObjects1);

gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Prev"), gdjs.WikiCode.GDPrevObjects1);

gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDPrevObjects1Objects, runtimeScene, true, false);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList12(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Other"), gdjs.WikiCode.GDOtherObjects1);

gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDOtherObjects1Objects, runtimeScene, true, false);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tetrapak"), gdjs.WikiCode.GDTetrapakObjects1);

gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDTetrapakObjects1Objects, runtimeScene, true, false);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paper"), gdjs.WikiCode.GDPaperObjects1);

gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDPaperObjects1Objects, runtimeScene, true, false);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Plastic"), gdjs.WikiCode.GDPlasticObjects1);

gdjs.WikiCode.condition0IsTrue_0.val = false;
{
gdjs.WikiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WikiCode.mapOfGDgdjs_46WikiCode_46GDPlasticObjects1Objects, runtimeScene, true, false);
}if (gdjs.WikiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WikiCode.eventsList16(runtimeScene);} //End of subevents
}

}


};

gdjs.WikiCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WikiCode.GDFormObjects1.length = 0;
gdjs.WikiCode.GDFormObjects2.length = 0;
gdjs.WikiCode.GDFormObjects3.length = 0;
gdjs.WikiCode.GDFormObjects4.length = 0;
gdjs.WikiCode.GDFormObjects5.length = 0;
gdjs.WikiCode.GDPrevPageObjects1.length = 0;
gdjs.WikiCode.GDPrevPageObjects2.length = 0;
gdjs.WikiCode.GDPrevPageObjects3.length = 0;
gdjs.WikiCode.GDPrevPageObjects4.length = 0;
gdjs.WikiCode.GDPrevPageObjects5.length = 0;
gdjs.WikiCode.GDSoundObjects1.length = 0;
gdjs.WikiCode.GDSoundObjects2.length = 0;
gdjs.WikiCode.GDSoundObjects3.length = 0;
gdjs.WikiCode.GDSoundObjects4.length = 0;
gdjs.WikiCode.GDSoundObjects5.length = 0;
gdjs.WikiCode.GDRectangleObjects1.length = 0;
gdjs.WikiCode.GDRectangleObjects2.length = 0;
gdjs.WikiCode.GDRectangleObjects3.length = 0;
gdjs.WikiCode.GDRectangleObjects4.length = 0;
gdjs.WikiCode.GDRectangleObjects5.length = 0;
gdjs.WikiCode.GDWasteObjects1.length = 0;
gdjs.WikiCode.GDWasteObjects2.length = 0;
gdjs.WikiCode.GDWasteObjects3.length = 0;
gdjs.WikiCode.GDWasteObjects4.length = 0;
gdjs.WikiCode.GDWasteObjects5.length = 0;
gdjs.WikiCode.GDNextObjects1.length = 0;
gdjs.WikiCode.GDNextObjects2.length = 0;
gdjs.WikiCode.GDNextObjects3.length = 0;
gdjs.WikiCode.GDNextObjects4.length = 0;
gdjs.WikiCode.GDNextObjects5.length = 0;
gdjs.WikiCode.GDPrevObjects1.length = 0;
gdjs.WikiCode.GDPrevObjects2.length = 0;
gdjs.WikiCode.GDPrevObjects3.length = 0;
gdjs.WikiCode.GDPrevObjects4.length = 0;
gdjs.WikiCode.GDPrevObjects5.length = 0;
gdjs.WikiCode.GDIconObjects1.length = 0;
gdjs.WikiCode.GDIconObjects2.length = 0;
gdjs.WikiCode.GDIconObjects3.length = 0;
gdjs.WikiCode.GDIconObjects4.length = 0;
gdjs.WikiCode.GDIconObjects5.length = 0;
gdjs.WikiCode.GDOtherObjects1.length = 0;
gdjs.WikiCode.GDOtherObjects2.length = 0;
gdjs.WikiCode.GDOtherObjects3.length = 0;
gdjs.WikiCode.GDOtherObjects4.length = 0;
gdjs.WikiCode.GDOtherObjects5.length = 0;
gdjs.WikiCode.GDTetrapakObjects1.length = 0;
gdjs.WikiCode.GDTetrapakObjects2.length = 0;
gdjs.WikiCode.GDTetrapakObjects3.length = 0;
gdjs.WikiCode.GDTetrapakObjects4.length = 0;
gdjs.WikiCode.GDTetrapakObjects5.length = 0;
gdjs.WikiCode.GDPaperObjects1.length = 0;
gdjs.WikiCode.GDPaperObjects2.length = 0;
gdjs.WikiCode.GDPaperObjects3.length = 0;
gdjs.WikiCode.GDPaperObjects4.length = 0;
gdjs.WikiCode.GDPaperObjects5.length = 0;
gdjs.WikiCode.GDPlasticObjects1.length = 0;
gdjs.WikiCode.GDPlasticObjects2.length = 0;
gdjs.WikiCode.GDPlasticObjects3.length = 0;
gdjs.WikiCode.GDPlasticObjects4.length = 0;
gdjs.WikiCode.GDPlasticObjects5.length = 0;
gdjs.WikiCode.GDDescriptionObjects1.length = 0;
gdjs.WikiCode.GDDescriptionObjects2.length = 0;
gdjs.WikiCode.GDDescriptionObjects3.length = 0;
gdjs.WikiCode.GDDescriptionObjects4.length = 0;
gdjs.WikiCode.GDDescriptionObjects5.length = 0;

gdjs.WikiCode.eventsList17(runtimeScene);
return;

}

gdjs['WikiCode'] = gdjs.WikiCode;
