---
layout: default
toc: true
title: İzlediklerim
---

<blockquote style="text-align: justify;">
    <b>BİLGİLENDİRME:</b> Blogumda kendim için oluşturduğum bölümlerden birisine geldiniz. Eskiden izlediğim filmleri bir kenara bırakarak düzenli olarak dizi ve film izlemeye başladım. Bir yerde kayıtlı olması adına da bloguma eklemek istedim.
    <br><br>
    Bir dipnot düşmüş olayım. Buraya dizi/film eklemem her şeyini beğendiğim, benimsediği fikri veyahut içerdiği eylemleri tasvip ettiğim anlamına gelmez. Karşıt fikrimde de olsa izlemekten gocunmam. Çünkü bu sayede farklı açıdan çıkarım yapabilirim ve bakış açılarını hakkında fikir sahibi olabilirim. IMDB denen puan saçmalığını da ciddiye pek almam, herkesin puanı kendine :)
    <br><br>
    ★ = Kötü<br>
    ★★ = Orta<br>
    ★★★ = İyi<br>
    ★★★★ = Çok İyi<br>
    ★★★★★ = Fevkalade<br>
    ★★★★★★ = Fevkaladenin Fevkinde<br>
</blockquote>

<h2 style="margin-bottom: 30px;" id="diziler">Diziler</h2>

<div class="book-movie-list-div">
    {% for serie in site.data.movies-series.series %}
        <div class="book-movie-div">
            <img src="{{ serie.cover-img }}" alt="">
            <div class="item-info-div">
                <b style="font-size: 15px; margin-bottom: 2px;">{{ serie.name }}</b>
                <p>{{ serie.score }}</p>
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
                <p>{{ movie.score }}</p>
                <span class="item-type">{{ movie.type }}</span>
                <p>Bitiş Tarihi: {{ movie.watching-date }}</p>
            </div>
        </div>
    {% endfor %}
</div>