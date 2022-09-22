const quotes = [
    {
        quote : "It is better to burn out than fade away",
        kor : "서서히 사라지기보다 한 번에 타버리는 것이 낫다",
        author : "Kurt Cobain"
    },{
        quote : "Simplicity is the keynote of all true elegance",
        kor : "단순함은 우아함의 진정한 핵심이다",
        author : "Coco Chanel"
    },{
        quote : "I don’t design clothes. I design dreams.",
        kor : "나는 옷을 디자인 하지 않는다. 꿈을 디자인 한다.",
        author : "Ralph Lauren"
    },{
        quote : "Fashion should be a from of escapism, and not a from of imprisonment",
        kor : "패션은 구속이 아닌 현실도피의 형태이어야 한다",
        author : "Alexander McQueen"
    },{
        quote : "In case I don't see ya! Good afternoon, good evening, and good night!",
        kor : "오늘 못 볼지도 모르니 미리 인사할게요! 굿 애프트눈, 굿 이브닝, 굿 나잇!",
        author : "The Truman Show, 1998"
    },{
        quote : "You can erase someone from your mind. Getting them out of your heart is another story",
        kor : "누군가를 마음 속에서 지울 수는 있지만 사랑을 잊는 것은 달라요",
        author : "Eternal Sunshine, 2004"
    },{
        quote : "I need to know that you're not gonna wake up in the morning and feel differently",
        kor : "어느 날 아침에 일어나 깨달았어, 너랑 만날땐 몰랐던 걸",
        author : "500 days of summer, 2009"
    },{
        quote : "If you're a bird, I'm a bird",
        kor : "만약 네가 새라면, 나도 새일거야",
        author : "The Notebook, 2004"
    },{
        quote : "Worse than the total agony of being in love?",
        kor : "사랑보다 더 큰 고통이 있나요?",
        author : "Love Actually, 2003"
    },{
        quote : "\n",
        kor : "늦었다고 생각할 때가 진짜 너무 늦었다",
        author : "Park Myung Soo"
    },{
        quote : "They must often change who would be constant in happiness or wisdom",
        kor : "늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다",
        author : "Confucius"
    },{
        quote : "Only I can change me life, no one can do it for me",
        kor : "내 인생을 바꾸는 사람은 자신입니다. 아무도 대신해줄 수 없어요",
        author : "Carol Burnett"
    },{
        quote : "Life is unfair, get used to it.",
        kor : "인생은 불공평 합니다. 익숙해지세요.",
        author : "Bill Gates"
    },{
        quote : "Believe in yourself",
        kor : "너자신을 믿어라",
        author : "Anonymous"
    },{
        quote : "It ain’t over till it’s over",
        kor : "끝날 때까지는 끝난 게 아니다",
        author : "Anonymous"
    },{
        quote : "It is kind of fun to do the impossible",
        kor : "불가능을 하는 것은 좀 재미있다",
        author : "Walt Disney"
    },{
        quote : "I’ve failed over and over and over again in my life and that is why I succeed.",
        kor : "나는 인생에서 몇 번이고 반복해서 실패했고 그것이 내가 성공하는 이유이다.",
        author : "Michael Jordan"
    },{
        quote : "Do one thing every day that scares you",
        kor : "매일 두려운 일을 한가지 하세요",
        author : "Anonymous"
    },{
        quote : "Wanting to be someone else is a waste of the person you are",
        kor : "다른 누군가가 되기를 원하는 것은 자신을 버리는 것이다",
        author : "Kurt Cobain"
    },{
        quote : "Though the sun is gone, i have a light",
        kor : "비록 태양이 사라져도, 나는 한 줄기 빛을 얻으리라",
        author : "Kurt Cobain"
    },
]

const quote = document.querySelector("#quotes p:first-child");
const kor = document.querySelector("#quotes p:nth-child(2)");
const author = document.querySelector("#quotes p:nth-child(3)");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
kor.innerText = todayQuote.kor;
author.innerText = todayQuote.author;

