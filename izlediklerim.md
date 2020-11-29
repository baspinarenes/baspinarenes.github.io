---
layout: default
toc: true
title: İzlediklerim
---

<blockquote style="text-align: justify;">
    <b>BİLGİLENDİRME:</b> Blogumda kendim için oluşturduğum bölümlerden birisine geldiniz. Eskiden izlediğim filmleri bir kenara bırakarak
    düzenli olarak dizi ve film izlemeye başladım. Bloguma da eklemek istedim. Hem bir yerde kayıtlı
    olmuş olur hem de ilgilenenler bu listeden tavsiye alabilir.
</blockquote>

<h2 style="margin-bottom: 30px;" id="diziler">Diziler</h2>

<div class="book-movie-list-div">
    {% for serie in site.data.movies-series.series %}
        <div class="book-movie-div">
            <img src="{{ serie.cover-img }}" alt="">
            <div class="item-info-div">
                <b style="font-size: 15px; margin-bottom: 2px;">{{ serie.name }}</b>
                <p>{{ serie.imdb }}</p>
                <span class="item-type">{{ serie.type }}</span>
                <p>Bitiş Tarihi: {{ serie.watching-date }}</p>
            </div>
        </div>
    {% endfor %}
</div>

<h2 style="margin-bottom: 30px;" id="filmler">Filmler</h2>

<div class="book-movie-list-div">
    {% for movie in site.data.movies-series.movies %}
        <div class="book-movie-div">
            <img src="{{ movie.cover-img }}" alt="">
            <div class="item-info-div">
                <b style="font-size: 15px; margin-bottom: 2px;">{{ movie.name }}</b>
                <p>{{ movie.imdb }}</p>
                <span class="item-type">{{ movie.type }}</span>
                <p>Bitiş Tarihi: {{ movie.watching-date }}</p>
            </div>
        </div>
    {% endfor %}
</div>