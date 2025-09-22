/**
 * 간단한 계산기
 * 
 * 전원 버튼 만들기 ON/OFF -> o
 * 전원 ON 시 위쪽에 0 뜨게 하기 -> o
 * 전원 OFF 시 위쪽 숫자 없애기 -> o
 * 초기화 버튼 만들기
 *      - CE(Clear Entry) 버튼은 현재 입력 중인 숫자만 지우는 기능 -> o
 *      - C(Clear) 버튼은 현재 입력한 숫자와 이전 계산 결과까지 모두 지우는 전체 삭제(All Clear) 기능
 * 0-9 값을 가지는 버튼 각각 생성
 * +, - , *, /, %, = 버튼 각각 생성
 * 연산자 버튼 눌렀을 때 각각의 이벤트 실행하도록
 * 
 * ce 버튼 이벤트 수정
 * 
 * 
 */ 
let isOutNum = document.getElementById("output-num");
let tempNum = null;// temp 값(지금까지 계산된 값)
const entryNum = 0; // 초기화 값
let stringNum = ""; // 총 계산 결과 값
if(tempNum != null) {
    if(resultButtonState != false){
    isOutNum.textContent = `${tempNum}`;
    }
}
window.onload = function() {

    /**
     * on/off 상태 & on/off 버튼 생성
     * on 상태 -> true 
     * off 상태 -> false
     * */ 
    let isOnOffState = false;
    
    const isOnOffButtons = document.createElement("button");
    
    isOnOffButtons.textContent = "ON";
    isOnOffButtons.style.color = "red";
    isOnOffButtons.style.width = "40px";
    isOnOffButtons.style.height = "40px";
    isOnOffButtons.style.fontSize = "10px";
    isOnOffButtons.style.textAlign = "center";

        
        // on/off 버튼 이벤트
        isOnOffButtons.addEventListener('click', () => {
            
            if(isOnOffState == false) {
                isOnOffState = true;
                console.log(isOnOffState);
                isOnOffButtons.textContent = "OFF"
                isOnOffButtons.style.backgroundColor = "red";
                isOnOffButtons.style.color = "white";
                isOutNum.textContent = 0;
                tempNum = 0;
                stringNum =  "";
                console.log("tempNum  = " + tempNum);
            }
            else if(isOnOffState == true) {
                isOnOffState = false;
                console.log(isOnOffState);
                isOnOffButtons.textContent = "ON"
                isOnOffButtons.style.color = "red";
                isOnOffButtons.style.backgroundColor = "white";
                isOutNum.textContent = null;
                tempNum = null;
                stringNum = null;
                console.log("tempNum  = " + tempNum);
            }
        });
        
        
        
    /**
     * 초기화 상태 & cancle 버튼 생성
     * */ 
    var cancleState = false;
        
    //clearEntry 버튼 생성
    
    const clearButton = document.createElement("button");

        clearButton.textContent = "C";
        clearButton.style.backgroundColor = "grey";
        clearButton.style.width = "40px";
        clearButton.style.height = "40px";
        clearButton.style.fontSize = "10px";
        clearButton.style.textAlign = "center";

        
    clearButton.addEventListener('click', () => {
        cancleState = true;
        if (isOnOffState != false) {
            if(cancleState == true) {
                stringNum = "";
                isOutNum.textContent = 0;
                cancleState = false;
                console.log("초기화!");
                console.log(cancleState);
            }
        }
    });
        

    /**
     * + 버튼 생성
     */

    // + 버튼 상태
    var sumButtonState = false;
    const sumButton = document.createElement('button');

    sumButton.textContent = "+";
    sumButton.style.width = "40px";
    sumButton.style.height = "40px";

    sumButton.addEventListener('click', () => {
        if (isOnOffState) {
            tempNum = Number(stringNum);
            sumButtonState = true;
            stringNum = "";
        }
    });

    /**
     * . 버튼 생성
     */
    const sosujumButton = document.createElement('button');

    sosujumButton.textContent = ".";
    sosujumButton.style.width = "60px";
    sosujumButton.style.height = "60px";

    sosujumButton.addEventListener('click', () => {
        return ".";
    });
    /**
     * = 버튼 생성
     */
    const resultButton = document.createElement('button');

    var resultButtonState = false;

    resultButton.textContent = "=";
    resultButton.style.width = "60px";
    resultButton.style.height = "60px";

    resultButton.addEventListener('click', () => {
        if (isOnOffState) {
            isOutNum.textContent = `${tempNum}`;
            stringNum = "";
            sumButtonState = false;
        }
    });
    document.getElementById("function-button").appendChild(clearButton);
    document.getElementById("function-button").appendChild(sumButton);
    document.getElementById("function-button").appendChild(isOnOffButtons);
    /**
     * 숫자 버튼 생성
     */
    const numButton = [];
    const numButtons = () => {
        for(let i=0; i < 10; i ++) {
        const buttons = document.createElement('button');
        buttons.value = i;
        buttons.textContent = i;
            if(i === 0) {
                document.getElementById("num-button-last-line").appendChild(sosujumButton);
                document.getElementById("num-button-last-line").appendChild(buttons);
                document.getElementById("num-button-last-line").appendChild(resultButton);
                numButton.push(buttons);
            }
            else if(i < 4) {
                document.getElementById("num-button-first-line").appendChild(buttons);
                numButton.push(buttons);
            }
            else if(i < 7) {
                document.getElementById("num-button-second-line").appendChild(buttons);
                numButton.push(buttons);
            }
            else if(i < 10){
                document.getElementById("num-button-third-line").appendChild(buttons);
                numButton.push(buttons);
            }

            buttons.addEventListener('click', () => {
                if(isOnOffState == true) {
                    if(sumButtonState == false) {
                        // stringNum = "";
                        stringNum += buttons.value;
                        tempNum = Number(stringNum);
                        isOutNum.textContent = `${stringNum}`;
                    }
                    else if(sumButtonState == true) {
                        stringNum = buttons.value;
                        tempNum += Number(stringNum);
                        isOutNum.textContent = `${stringNum}`;
                        sumButtonState = false;
                        stringNum += "";
                    }
                }
                return tempNum;
            });

        }
        return numButton;
    }
    numButtons();
}    
