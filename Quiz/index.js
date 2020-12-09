const quiz = [
    {
        question: '2020年関東住みたい街ランキング第一と言えば？？' ,
        answers: [
            '北浜', 
            '西宮北口', 
            '梅田', 
            '芦屋'
        ],
        correct: '西宮北口'
    },
    {
        question: '関東だと？' ,
        answers: [
            '恵比寿', 
            '六本木', 
            '吉祥寺', 
            '横浜'
        ],
        correct: '横浜'
    },
    {
        question: '日本で一番高いビルと言えば？' ,
        answers: [
            '東京都庁', 
            '大阪駅前第3ビル', 
            'スカイツリー', 
            'あべのハルカス'
        ],
        correct: 'あべのハルカス'
    },
    {   
        question: 'デスクに置くことで生産性が上がると"されない"ものはどれ？' ,
        answers: [
            '観葉植物', 
            '自分が映る鏡', 
            '恋人の写真', 
            'Nintendo　Switch', 
        ],
        correct: 'Nintendo　Switch'
    },
    {   
        question: '今、何問目？' ,
        answers: [
            '4問目', 
            '5問目', 
            '6問目', 
            '7問目'
        ],
        correct: '5問目'
    }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupquiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question ;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupquiz();

const clickHadler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！素晴らしいです！');
        score++
    }　else {
        window.alert('残念！正解は'　+ quiz[quizIndex].correct + 'でした!')
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupquiz();
    } else{
        window.alert('おしまい！あなたの正解数は'　+ score + '/' + quizLength + 'です！')
    }
};

//ボタンをクリックすると正誤判定
let handlerIndex = 0
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
            clickHadler(e);
            });
            handlerIndex++
            }

// $button[0].addEventListener('click', (e) => {
//     clickHadler(e);
// });
// $button[1].addEventListener('click', (e) => {
//     clickHadler(e);
// });
// $button[2].addEventListener('click', (e) => {
//     clickHadler(e);
// });
// $button[3].addEventListener('click', (e) => {
//     clickHadler(e);
// });