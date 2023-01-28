import {lastUrlSido, lastUrlGu, firstUrl} from "./url.js"

const lastUrlSido = myUrl.lastUrlSido;
const lastUrlGu = myUrl.lastUrlGu;
const firstUrl = myUrl.firstUrl;

const tableArray=["10", "21", "22", "30", "41", "42"];
const tableArrayCount=tableArray.length;
const lastUrl = {
    "sido":lastUrlSido,
    "gu":lastUrlGu,
}
const FINAL_LOCALURL_SIDO = "?sido2=gyeonggi"
const FINAL_LOCALURL_GUGUN = "?gugun_cd=B034"

// �õ�
for (i=0; i<tableArrayCount; i++){
    t = "sido"
    tableId = tableArray[i]
    nowTable = document.getElementById(tableId).getElementsByClassName(t)
    
    for (j=0; j<nowTable.length; j++) {
        if (nowTable[j].getElementsByTagName("a")[0]) {
            nowTable[j].getElementsByTagName("a")[0].href = firstUrl+lastUrl[t][tableId][j]+FINAL_LOCALURL_SIDO
        }
    }
}

// �ñ���
for (i=0; i<tableArrayCount; i++){
    t = "gu"
    tableId = tableArray[i]
    nowTable = document.getElementById(tableId).getElementsByClassName(t)

    for (j=0; j<nowTable.length; j++) {
        if (nowTable[j].getElementsByTagName("a")[0]) {
            nowTable[j].getElementsByTagName("a")[0].href = firstUrl+lastUrl[t][tableId][j]+FINAL_LOCALURL_GUGUN
        }
    }
}

// ǥ����
const numberWidth = 20;
const lWidth = 250;
const mWidth = 250;
const sWidth = 250;
const sidoUrlWidth = 150;
const guUrlWidth = 150;

// �÷��̸�
const largeColName= "��޴�";
const middleColName= "�߸޴�";
const smallColName= "�Ҹ޴�";
const gungyukColName= "�����õ�";
const gichoColName= "��������ü";

for (i=0; i<tableArrayCount; i++) {
    // ��������
    document.getElementsByClassName("titleWidth")[i].width = numberWidth+lWidth+mWidth+sWidth+sidoUrlWidth+guUrlWidth;
    document.getElementsByClassName("numberCol")[i].width = numberWidth;
    document.getElementsByClassName("largeCol")[i].width = lWidth;
    document.getElementsByClassName("middleCol")[i].width = mWidth;
    document.getElementsByClassName("smallCol")[i].width = sWidth;
    document.getElementsByClassName("gungyukCol")[i].width = sidoUrlWidth;
    document.getElementsByClassName("gichoCol")[i].width = guUrlWidth;

    // �÷��̸�
    document.getElementsByClassName("largeCol")[i].innerText = largeColName;
    document.getElementsByClassName("middleCol")[i].innerText = middleColName;
    document.getElementsByClassName("smallCol")[i].innerText = smallColName;
    document.getElementsByClassName("gungyukCol")[i].innerText = gungyukColName;
    document.getElementsByClassName("gichoCol")[i].innerText = gichoColName;
}

