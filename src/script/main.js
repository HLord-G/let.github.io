
const header = `
<header class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">LET & Civil Service Reviewer PH</a>
  </div>
  <div class="flex-none">
    <a href="#about" class="hover:underline mr-[20px] max-[769px]:hidden font-bold">About</a>
    <a href="#reviewers" class="hover:underline mr-[20px] max-[769px]:hidden font-bold">Reviewers</a>

    <div class="dropdown dropdown-end hidden max-[769px]:block">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="">
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M80-160v-168.67h168.67V-160H80Zm235.33 0v-168.67H880V-160H315.33ZM80-395.33v-169.34h168.67v169.34H80Zm235.33 0v-169.34H880v169.34H315.33ZM80-631.33V-800h168.67v168.67H80Zm235.33 0V-800H880v168.67H315.33Z"/></svg>
        </div>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a  href="#about">
            About
          </a>
        </li>
        <li><a href="#reviewers">Reviewers</a></li>
      </ul>
    </div>
  </div>
</header>
`;



const header_choices = `
<header class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">LET & Civil Service Reviewer PH</a>
  </div>
  <div class="flex-none">
    <a href="../../#about" class="hover:underline mr-[20px] max-[769px]:hidden font-bold">About</a>
    <a href="../../#reviewers" class="hover:underline mr-[20px] max-[769px]:hidden font-bold">Reviewers</a>

    <div class="dropdown dropdown-end hidden max-[769px]:block">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="">
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M80-160v-168.67h168.67V-160H80Zm235.33 0v-168.67H880V-160H315.33ZM80-395.33v-169.34h168.67v169.34H80Zm235.33 0v-169.34H880v169.34H315.33ZM80-631.33V-800h168.67v168.67H80Zm235.33 0V-800H880v168.67H315.33Z"/></svg>
        </div>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a href="../../#about">
            About
          </a>
        </li>
        <li><a href="../../#reviewers">Reviewers</a></li>
      </ul>
    </div>
  </div>
</header>
`;



const footer = `
  <footer class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
    <nav class="grid grid-flow-col gap-4">
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Presss kit</a>
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </nav>
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by LC Reviewer PH</p>
    </aside>
  </footer>
`


const footer_choices = `
  <footer class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
    <nav class="grid grid-flow-col gap-4">
      <a class="link link-hover">About uss</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Presss kit</a>
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </nav>
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by LC Reviewer PH</p>
    </aside>
  </footer>
`







const path = window.location.pathname; // Ex: /repo-name/choices/let/
const match = path.match(/(\/choices\/[^\/]*)/); // Match starts with /choices/... until next /

const finalPath = match ? match[1] : null;

console.log("Final Path:", finalPath);

switch (finalPath) {
    case "/choices/let":
    case "/choices/cse":
    case "/choices/ept":

        choicesFunc();
        break;

    default:
        if (!$('header.navbar').length) {
            $('body').prepend(header);
        }

        if (!$('footer').length) {
            $('body').append(footer);
        }
        break;
}

 
function  choicesFunc(params) {
    if (!$('header.navbar').length) {
        $('body').prepend(header_choices);
    }

    if (!$('footer').length) {
        $('body').append(footer_choices);
    } 
}
 
 



try {
    const cards = [
        {
          title: "Licensure Examination for Teachers (LET)",
          description: "Free LET reviewers and notes to help aspiring teachers prepare and succeed in the exam.",
          link: "choices/let/",
          img: "img1.png"
        },
        {
          title: "English Proficiency Test (EPT)",
          description: "Free EPT reviewers and notes to help you boost your English skills and pass the test with confidence.",
          link: "choices/ept/",
          img: "img2.png"
        },
        {
          title: "Civil Service Examination (CSE)",
          description: "Free CSE reviewers and notes to help you prepare for a successful career in government service.",
          link: "choices/cse/",
          img: "img3.png"
        }
      ];
  
    $(document).ready(function () {
  
      const _0x40fb2c=_0x9c28;(function(_0x467304,_0x20c3d9){const _0xbba882=_0x9c28,_0x46b662=_0x467304();while(!![]){try{const _0x133c54=-parseInt(_0xbba882(0x177))/0x1*(parseInt(_0xbba882(0x171))/0x2)+parseInt(_0xbba882(0x167))/0x3+parseInt(_0xbba882(0x168))/0x4+-parseInt(_0xbba882(0x175))/0x5+-parseInt(_0xbba882(0x17c))/0x6+parseInt(_0xbba882(0x17b))/0x7*(parseInt(_0xbba882(0x16c))/0x8)+parseInt(_0xbba882(0x16e))/0x9;if(_0x133c54===_0x20c3d9)break;else _0x46b662['push'](_0x46b662['shift']());}catch(_0x274108){_0x46b662['push'](_0x46b662['shift']());}}}(_0x2703,0x5efce));let currentIndex=0x0;function _0x2703(){const _0xe4a57b=['length','background-image','fadeIn','1920075FVwCuC','img','1iGKSET','#card-img\x20.flex.flex-col','attr','#card-description','1386182GKTsms','1919874JzwWfP','click','css','fadeOut','1731327vfLano','859048Zikxgt','#card-title','#link','#card-img','8ddrSOM','link','3971394IVqqAH','title','description','676198vGEZQQ'];_0x2703=function(){return _0xe4a57b;};return _0x2703();}function updateCard(){const _0x5df395=_0x9c28,_0x4dbe26=cards[currentIndex],_0x5dd85e=$(_0x5df395(0x178));_0x5dd85e[_0x5df395(0x17f)](0x12c,function(){const _0x21579b=_0x5df395;$(_0x21579b(0x16b))[_0x21579b(0x17e)](_0x21579b(0x173),'url(\x27'+_0x4dbe26[_0x21579b(0x176)]+'\x27)'),$(_0x21579b(0x169))['text'](_0x4dbe26[_0x21579b(0x16f)]),$(_0x21579b(0x17a))['text'](_0x4dbe26[_0x21579b(0x170)]),$(_0x21579b(0x16a))[_0x21579b(0x179)]('link',_0x4dbe26['link']),_0x5dd85e[_0x21579b(0x174)](0x12c);}),currentIndex=(currentIndex+0x1)%cards[_0x5df395(0x172)];}function _0x9c28(_0x2e7588,_0x5d8338){const _0x2703c4=_0x2703();return _0x9c28=function(_0x9c2847,_0x3e085d){_0x9c2847=_0x9c2847-0x167;let _0x565c4c=_0x2703c4[_0x9c2847];return _0x565c4c;},_0x9c28(_0x2e7588,_0x5d8338);}$('#link')['on'](_0x40fb2c(0x17d),function(){const _0x1d45f4=_0x40fb2c,_0x3aa253=$(this)['attr'](_0x1d45f4(0x16d));window['location']['href']=_0x3aa253;}),updateCard(),setInterval(updateCard,0x2328);
  
    });
  
    function link(x){
        switch (x) {
          case 0:
          window.location.href = cards[0].link;
            break;
          case 1:
          window.location.href = cards[1].link;
            break;
          case 2:
          window.location.href = cards[2].link;
            break;
        }
      }
    
  
      $(document).on("click", "#link", function(){
        window.location.href = $(this).attr("link");
      })
  
} catch (error) {
    
}


feather.replace()