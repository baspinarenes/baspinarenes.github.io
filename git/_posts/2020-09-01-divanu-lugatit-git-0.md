---
layout: post
image: assets/img/card-img/git.png
title: "Divanu Lügatit Git - 0:<br>Seriye Giriş"
---

Git konusunu araştırmaya başladığımda kafam allak bullak olmuştu. Bunun sebebi ise Türkçe yazıların içeriğinin genelde safi bilgi olması ve anlatanın duygularını aktaramaması. Amacım emek harcanmış bu tarz yazıları yargılamak değil, zaten bunun için yeterli kapasitede değilim. Ancak bir okuyucuyum ve bu yazıyı hissetmemi engelliyor ve öğrenmemi zorlaştırıyor. Benim gibi bu zorlukları çekenler içinde kendi Git serime garip bir isimle birlikte başlıyorum. Sıkıcı olmayan ve sizlerle birlikte güzel vakit geçireceğimiz bir seri olmasını ümit ediyorum. Belki de berbat bir şey çıkar ortaya kim bilir ? :)

Seri, öğrenme rehberi diye tabir ettiğim bir biçimde olacak. Birçok kaynak tararken aldığım notları sizinle rahat bir dil kullanarak paylaşacağım, örnekler katarak kavramları pekiştirmeye çalışacağım ve zaman zaman farklı linklere yönlendireceğim. Umarım siz Memati'ye dönüşmeden bu serinin sonunu görebiliriz.

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-0/001.gif">

Artık Git öğrenme vaktinizin geldiğini hissediyorsanız buyrun hep birlikte başlayalım.

## Seri İçeriği {#seri-icerigi}

- <span style="font-weight: bold;">Divanu Lügatit Git - 0 : Seriye Giriş</span>
- [Divanu Lügatit Git - 1 : Versiyon Kontrol Sistemide Nesi?](/git/divanu-lugatit-git-1/)
- [Divanu Lügatit Git - 2 : Git ve GitHub Nedir?](/git/divanu-lugatit-git-2/)
- [Divanu Lügatit Git - 3 : Git ile Lokalde Takılmak](/git/divanu-lugatit-git-3/)
- [Divanu Lügatit Git - 4 : Lokalin Derinlikleri](/git/divanu-lugatit-git-4/)


<div class="seri-sozlugu">
  <h2 id="seride-kullanilan-terimler">Seride Kullanılan Terimler</h2>

  Bir yazının tam ortasındayken "Bu neydi ya?" diye düşünüyorsanız yazıda aramakla uğraşmadan direk burada bulabilirsiniz.

  <div class="form-group pull-right table-input">
      <input type="text" class="search form-control" id="findWord" onkeyup="tableFindFunc()" placeholder="Aramak istediğin terim nedir?" style="text-align: center;">
  </div>
  <table class="table table-hover table-bordered results dict-table" id="dictTable">
    <thead>
      <tr>
        <th style="width:350px;">Terim</th>
        <th style="width:350px">Türkçe</th>
        <th class="">Açıklama</th>
      </tr>
      <tr class="warning no-result">
        <td colspan="4"><i class="fa fa-warning"></i> No result</td>
      </tr>
    </thead>
    <tbody>
      {% for entry in site.data.git-dict %}
        <tr>
          <td style="vertical-align: middle;">{{ entry.terim }}</td>
          <td style="vertical-align: middle;">{{ entry.turkce }}</td>
          <td style="vertical-align: middle;">{{ entry.anlam }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Seride Kullanılan Kaynaklar {#seride-kullanilan-kaynaklar}

<div>
  [1]: <a href="https://git-scm.com/book/">https://git-scm.com/book/</a><br>
  [2]: <a href="https://aliozgur.gitbooks.io/git101/">https://aliozgur.gitbooks.io/git101/</a><br>
  [3]: <a href="https://www.coursera.org/learn/introduction-git-github/">https://www.coursera.org/learn/introduction-git-github/</a><br>
  [4]: <a href="https://www.atlassian.com/git/tutorials">https://www.atlassian.com/git/tutorials</a><br>
</div>
