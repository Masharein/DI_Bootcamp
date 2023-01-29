// element.getElementById()
// element.getElementsByClassName()
// element.getElementsByTagName()
// element.querySelector()
// element.querySelectorASll()
	
// Возвращает firstэлемент в документе, соответствующий
// указанному селектору или группе селекторов. Если совпадений не найдено, nullвозвращается.
// querySelectorAll	CSS-селектор	
// Возвращает все элементы (список), соответствующие заданному селектору CSS.
// getElementById	id	
// Возвращает элемент с указанным идентификатором
// getElementsByTagName	тег или '*'	
// Возвращает массив всех элементов с одинаковым именем тега .
// getElementsByClassName	class	
// Возвращает массив всех элементов с одинаковым именем класса .

// Создание/Добавление/Удаление Узлов DOM
// 1. Создание Элементов: CreateElement()
//   Syntax : document.createElement('tag')
//   let newDiv = document.createElement('div')  


// 2. Создание Текста: CreateTextNode()
// Syntax : document.createTextNode('text')  
// let newTextNode = document.createTextNode('Here I am');


// 3. Добавление Элемента: AppendChild()
// Добавление элемента в качестве последнего дочернего элемента родительского узла

// Syntax: `element.appendChild`
// newDiv.appendChild(newTextNode);
// document.body.appendChild(newDiv);


// 4. Доступ/Изменение Содержимого HTML Элемента: InnerHTML
// document.getElementById("header").textContent = "Hello World!";
// document.getElementsByTagName("div")[0].innerHTML = "<h1>Hello World!</h1>"


// 5. Удаление Элементов: RemoveChild()
// let parentElem = document.getElementById("main");
// let childElem = document.getElementById("hint");
// parentElem.removeChild(childElem);


// Еще Несколько Примеров:
// // getElementById('id')
// document.getElementById('demo');

// // getElementsByClassName('class')
// document.getElementsByClassName('demo');

// // getElementsByTagName('tag')
// document.getElementsByTagName('p');

// // querySelector('css selector')
// document.querySelector('#demo-query');

// // querySelectorAll('css selector')
//     let demoQueryAll = document.querySelectorAll('.demo-query-all');

//     demoQueryAll.forEach(query => {
//       query.style.border = '1px solid green';
//     });


// Селекторы Кеша
// Если вы работаете несколько раз с одним элементом, вы должны поместить его в переменную. Например:

// document.getElementById("menu").style.background = "red";
// document.getElementById("menu").style.display = "block";


// В описанном выше процессе элемент дважды ищется в дереве DOM. Если DOM сложный, это тяжелая операция.

// Поэтому добавьте этот элемент в переменную (кэшируйте его):

// let item = document.getElementById("menu");
// item.style.background = "red";
// item.style.display = "block";


// В описанном выше процессе элемент ищется один раз в дереве DOM. Это быстрее и эффективнее.



// Другие Методы
// ЗапросСелекторВсе()
// Примеры querySelectorAll() :

// Безусловно, самый универсальный метод elem.querySelectorAll(css)возвращает все элементы внутри elem, соответствующие заданному селектору CSS.
// Этот метод действительно мощный, потому что можно использовать любой селектор CSS.

// Здесь мы ищем все <li> элементы, которые являются последними детьми:

//     <ul>
//       <li>The</li>
//       <li>test</li>
//     </ul>
//     <ul>
//       <li>has</li>
//       <li>passed</li>
//     </ul>


//     <script>
//       let elements = document.querySelectorAll('ul > li:last-child');

//       for (let elem of elements) {
//         alert(elem.innerHTML); // "test", "passed"
//       }

//     </script>


// Мы также можем использовать псевдоклассы .

// Псевдоклассы в селекторе CSS вроде :hoverи :activeтоже поддерживаются.
// Например, document.querySelectorAll(':hover')вернет коллекцию с элементами, на которые сейчас наведен указатель (в порядке вложения: от самого внешнего к самому вложенному).



// Спички()
// примеры совпадений() :

// ничего elem.matches(css)не ищет; он только проверяет, соответствует ли элемент заданному CSS-селектору. Возвращает истину или ложь.
// Этот метод удобен, когда мы перебираем элементы (например, в массиве) и пытаемся отфильтровать те, которые нас интересуют.

// <a href="http://example.com/file.zip">...</a>
// <a href="http://ya.ru">...</a>

// <script>
//   // can be any collection instead of document.body.children
//   for (let elem of document.body.children) {
//     if (elem.matches('a[href$="zip"]')) {
//       // check if it ends with "zip"
//       alert("The archive reference: " + elem.href );
//     }
//   }

// </script>


// Ближайший()
// ближайшие примеры:

// Предками элемента являются родитель, дедушка и бабушка, прапрародитель и так далее. Предки вместе образуют цепочку родителей от компонента до вершины.


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
// </head>
// <body><! -- The parent of div Grandparent of ul Great-Grandparent of li -->
// <div><! -- The Parent of ul Grandparent of li-->
//     <ul> <! --The Parent of li -->
//         <li>Child</li>
//         <li>Child</li>
//         <li>Chil</li>
//     </ul>
// </div>
// </body>
// </html>


// Метод elem.closest(css)ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.

// Другими словами, ближайший метод поднимается от элемента и проверяет каждого из родителей. Если он соответствует селектору, то поиск останавливается и возвращается предок.

//     <h1>Contents</h1>

//     <div class="contents">
//       <ul class="book">
//         <li class="chapter">Chapter 1</li>
//         <li class="chapter">Chapter 1</li>
//       </ul>
//     </div>

//     <script>
//       let chapter = document.querySelector('.chapter'); // LI

//       alert(chapter.closest('.book')); // UL
//       alert(chapter.closest('.contents')); // DIV

//       alert(chapter.closest('h1')); // null (because h1 is not an ancestor)
//     </script>
