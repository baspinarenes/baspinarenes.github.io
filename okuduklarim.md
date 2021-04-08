---
layout: default
title: Okuduklarım
---

<blockquote style="text-align: justify;">
    <b>BİLGİLENDİRME:</b> Blogumda kendim için oluşturduğum bölümlerden birisine geldiniz. Eskiden okuduğum kitapları bir kenara bırakarak
    kütüphanemde bulunan tüm kitapları en baştan okumaya başladım. Bloguma da bunların kaydını tutmak istedim.
    <br><br>
    Bir dipnot düşmüş olayım. Buraya kitap eklemem, o kitapla ilgili her şeyi beğenmem, benimsediği fikri veyahut ana fikrini tasvip etmem anlamına gelmez. Karşıt fikrimde de olsa okumaktan gocunmam. Çünkü bu sayede farklı açıdan çıkarım yapabilirim ve bakış açılarını hakkında fikir sahibi olabilirim.
</blockquote>

<div class="book-movie-list-div">
    {% for book in site.data.books %}
        <div class="book-movie-div">
            <img src="{{ book.cover-img }}" alt="">
            <div class="item-info-div">
                <b style="font-size: 15px; margin-bottom: 2px;">{{ book.name }}</b>
                <p>{{ book.author }}</p>
                <span class="item-type">{{ book.type }}</span>
                <p>Bitiş Tarihi: {{ book.reading-date }}</p>
            </div>
        </div>
    {% endfor %}
</div>