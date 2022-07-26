**Read in other languages: [Русский](README.md), [Polski](README.pl.md).**

# Parcel template

Этот проект был создан при помощи Parcel. Для знакомства и настройки
дополнительных возможностей [обратись к документации](https://parceljs.org/).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Склонируй этот репозиторий.
3. Измени имя папки с `parcel-project-template` на имя своего проекта.
4. Создай новый пустой репозиторий на GitHub.
5. Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Установи зависимости проекта в терминале командой `npm install` .
7. Запусти режим разработки, выполнив команду `npm start`.
8. Перейди в браузере по адресу [http://localhost:1234](http://localhost:1234).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## Файлы и папки

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  файлы стилей страниц. Например, для `index.html` файл стилей называется
  `index.scss`.
- Изображения добавляй в папку `src/images`. Сборщик оптимизирует их, но только
  при деплое продакшн версии проекта. Все это происходит в облаке, чтобы не
  нагружать твой компьютер, так как на слабых машинах это может занять много
  времени.

## Деплой

Для настройки деплоя проекта необходимо выполнить несколько дополнительных шагов
по настройке твоего репозитория. Зайди во вкладку `Settings` и в подсекции
`Actions` выбери выбери пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Пролистай страницу до последней секции, в которой убедись что выбраны опции как
на следующем изображении и нажми `Save`. Без этих настроек у сборки будет
недостаточно прав для автоматизации процесса деплоя.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн версия проекта будет автоматически собираться и деплоиться на GitHub
Pages, в ветку `gh-pages`, каждый раз когда обновляется ветка `main`. Например,
после прямого пуша или принятого пул-реквеста. Для этого необходимо в файле
`package.json` отредактировать поле `homepage` и скрипт `build`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` или скрипта `build` в
файле `package.json`.

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.

<!-- //----------------------ЗАДАНИЯ-----------------//

Скачай стартовые файлы с базовой разметкой, готовыми стилями и подключенными
файлами скриптов для каждого задания. Скопируй их себе в проект.

В файле gallery-items.js есть массив galleryItems, который содержит объекты с
информацией о изображениях: маленькое (превью), оригинальное (большое) и
описание. Мы уже подключили его к каждому из JS-файлов проекта.

---------Задание 1 - галерея изображений

Создай галерею с возможностью клика по её элементам и просмотра полноразмерного
изображения в модальном окне. Посмотри демо видео работы галереи. Выполняй это
задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько
подзадач:

Создание и рендер разметки по массиву данных galleryItems и предоставленному
шаблону элемента галереи. Реализация делегирования на div.gallery и получение
url большого изображения. Подключение скрипта и стилей библиотеки модального
окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на
минифицированные (.min) файлы библиотеки. Открытие модального окна по клику на
элементе галереи. Для этого ознакомься с документацией и примерами. Замена
значения атрибута src элемента <img> в модальном окне перед открытием. Используй
готовую разметку модального окна с изображением из примеров библиотеки
basicLightbox.

Разметка элемента галереи Ссылка на оригинальное изображение должна храниться в
data-атрибуте source на элементе <img>, и указываться в href ссылки. Не добавляй
другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>

Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по
умолчанию пользователь будет перенаправлен на другую страницу. Запрети это
поведение по умолчанию.

Закрытие с клавиатуры ВНИМАНИЕ Этот функционал не обязателен при сдаче задания,
но будет хорошей дополнительной практикой.

Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы
прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки
basicLightbox есть метод для программного закрытия модального окна.

---------Задание 2 - библиотека SimpleLightbox

Сделай такую же галерею как в первом задании, но используя библиотеку
SimpleLightbox, которая возьмет на себя обработку кликов по изображениям,
открытие и закрытие модального окна, а также пролистывание изображений при
помощи клавиатуры. Посмотри демо видео работы галереи с подключенной
библиотекой.

Необходимо немного изменить разметку карточки галереи, используй этот шаблон.

<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>

Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на
несколько подзадач:

Создание и рендер разметки по массиву данных galleryItems и предоставленному
шаблону элемента галереи. Используй готовый код из первого задания. Подключение
скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить
ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
Инициализация библиотеки после того как элементы галереи созданы и добавлены в
div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую
очередь секции «Usage» и «Markup». Посмотри в документации секцию «Options» и
добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет
снизу и появляется через 250 миллисекунд после открытия изображения. -->
