let searchable = [
  "<a href='ground.html'>B-101(Civil workshop poly.)</a>",
  "<a href='ground.html'>B-104(Mechanics lab)</a>",
  "<a href='ground.html'>B-106(Gents toilet)</a>",
  "<a href='ground.html'>B-107(GDIOT CLUB)</a>",
  "<a href='ground.html'>B-108(FM Lab)</a>",
  "<a href='ground.html'>B-110(Machinery Lab)</a>",
  "<a href='ground.html'>B-111(Civil Computer lab)</a>",
  "<a href='ground.html'>B-112(Transportation lab)</a>",
  "<a href='ground.html'>B-113(Civil lab)</a>",
  "<a href='ground.html'>B-114(Faculty room)</a>",
  "<a href='ground.html'>B-115(Ladise Toilet)</a>",
  "<a href='ground.html'>B-117(Classrooom poly.)</a>",
  "<a href='ground.html'>B-118(Classrooom poly.)</a>",

  "<a href='1st.html'>B-202(Admission Cell)</a>",
  "<a href='1st.html'>B-203(Lecture Hall)</a>",
  "<a href='1st.html'>B-204(Ladies Toilet)</a>",
  "<a href='1st.html'>B-205(Vice Principal Office)</a>",
  "<a href='1st.html'>B-206(Engg. Physics Lab)</a>",
  "<a href='1st.html'>B-207(Engg. Chemistry Lab)</a>",
  "<a href='1st.html'>B-208(Engg. Chemistry Lab)</a>",
  "<a href='1st.html'>B-209(MAC Lab)</a>",
  "<a href='1st.html'>B-210(Programming Lab)</a>",
  "<a href='1st.html'>B-211(Computer Lab)</a>",
  "<a href='1st.html'>B-212(Data Structure Lab)</a>",
  "<a href='1st.html'>B-213(Faculty room)</a>",
  "<a href='1st.html'>B-214(Gents Toilet)</a>",
  "<a href='1st.html'>B-215(Classrooom)</a>",
  "<a href='1st.html'>B-216(Classrooom)</a>",


  "<a href='2nd.html'>B-300(Faculty room)</a>",
  "<a href='2nd.html'>B-301(Lecture Hall)</a>",
  "<a href='2nd.html'>B-302(Lecture Hall)</a>",
  "<a href='2nd.html'>B-303(Gents Toilet)</a>",
  "<a href='2nd.html'>B-304(HOD Engg. Sciences & Humanities)</a>",
  "<a href='2nd.html'>B-305(Seminar Hall)</a>",
  "<a href='2nd.html'>B-306(Language Lab)</a>",
  "<a href='2nd.html'>B-307(Physics Lab)</a>",
  "<a href='2nd.html'>B-308(Trial Room)</a>",
  "<a href='2nd.html'>B-309(Lab)</a>",
  "<a href='2nd.html'>B-310(NSS Office)</a>",
  "<a href='2nd.html'>B-311(Classroom)</a>",
  "<a href='2nd.html'>B-312(Faculty room)</a>",
  "<a href='2nd.html'>B-313(Gents Toilet)</a>",
  "<a href='2nd.html'>B-314(Lecture Hall)</a>",
  "<a href='2nd.html'>B-315(Lecture Hall)</a>",


  "<a href='3rd.html'>B-400(Faculty room)</a>",
  "<a href='3rd.html'>B-401(Lecture Hall)</a>",
  "<a href='3rd.html'>B-402(Lecture Hall)</a>",
  "<a href='3rd.html'>B-403(Gents Toilet)</a>",
  "<a href='3rd.html'>B-404(Faculty room)</a>",
  "<a href='3rd.html'>B-405(Drawing Hall)</a>",
  "<a href='3rd.html'>B-406(Faculty room)</a>",
  "<a href='3rd.html'>B-407(Lecture Hall)</a>",
  "<a href='3rd.html'>B-408(EDD Lab)</a>",
  "<a href='3rd.html'>B-409(Modeling Lab)</a>",
  "<a href='3rd.html'>B-410(Engg. Design & Development)</a>",
  "<a href='3rd.html'>B-411(Faculty room)</a>",
  "<a href='3rd.html'>B-412(Ladies Toilet)</a>",
  "<a href='3rd.html'>B-413(Lecture Hall)</a>",
  "<a href='3rd.html'>B-414(Lecture Hall)</a>",
  "<a href='3rd.html'>B-415(Room)</a>",


];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  const content = results
    .map((item) => {
      return `<li><a>${item}</a></li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}
