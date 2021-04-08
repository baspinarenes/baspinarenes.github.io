---
layout: post
image: assets/img/card-img/git.png
title: "Divanu Lügatit Git - 2:<br>Git ve GitHub Nedir?"
excerpt: "Yavaş yavaş öğreneceklerimizin arkaplanını oluşturmaya devam ediyoruz. Bu yazıda, git nedire ve işleyişine değindikten sonra kısacık Github'ın Git ile bağlantısından bahsedeceğiz. Git komutlarını anlayabilmek için önemli bir yazı olduğundan pür dikkat okumalısınız."
toc: true
---

## Seri İçeriği {#seri-icerigi}

- [Divanu Lügatit Git - 0 : Seriye Giriş](/git/divanu-lugatit-git-0/) 
- [Divanu Lügatit Git - 1 : Versiyon Kontrol Sistemide Nesi?](/git/divanu-lugatit-git-1/)
- <span style="font-weight: bold;">Divanu Lügatit Git - 2 : Git ve GitHub Nedir?</span>
- [Divanu Lügatit Git - 3 : Git ile Lokalde Takılmak](/git/divanu-lugatit-git-3/)
- [Divanu Lügatit Git - 4 : Lokalin Derinlikleri](/git/divanu-lugatit-git-4/)

<br>
Yavaş yavaş öğreneceklerimizin arkaplanını oluşturmaya devam ediyoruz. Bu yazıda, "Git nedir, yapısı ve işleyişi nasıldır?" sorularına değindikten sonra kısacık Github'ın Git ile bağlantısından bahsedeceğiz. Git komutlarını anlayabilmek için önemli bir yazı olduğundan pür dikkat okumalısınız.

## Git Kurulumu {#git-kurulumu}

Önce şu linkleri verelim, herkes indirsin ki hemen aradan çıksın:

Linux:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	 <a href="https://git-scm.com/download/linux">https://git-scm.com/download/linux</a><br>
Mac:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://git-scm.com/download/mac">https://git-scm.com/download/mac</a><br>
Windows: <a href="https://git-scm.com/download/win">https://git-scm.com/download/win</a><br>

İndirdikten sonra emin olmak için terminalde `git --version` komutunu çalıştırıp kontrol edelim:

![git-version]({{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-2/001.png) 

## Linkteki SCM İfadesi {#linkdeki-scm-ifadesi}

Git'i indirirken site adresine baktığınızda arkedeceksiniz üzere **"SCM"** ifadesi geçer. Buna aslında VCS'in diğer bir adı diyebiliriz. **"Source Code Management"** teriminin yani kaynak kodu yönetiminin kısaltmasıdır. Ancak bu sistem kaynak kodu dışındaki şeylerde de kullanabileceğimizden dolayı VCS kullanmak daha yaygındır.

## Nasıl Ortaya Çıktı? {#peki-nasil-ortaya-cikti}

Linux kerneli geliştirilirken dünyanın her yerinden bir çok sayıda geliştirici görev aldığı için Bitkeeper isimli DVCS kullanılıyordur. Yaşanan bazı şeylerden sonra BitKeeper ücretsiz kullanımı kaldırır. Buna sinirlenen **Linus Torvalds** ise BitKeeper kullanırken edindiği bilgiler sayesinde, dağıtık ve veri kaybının zor olduğu bir VCS yazmaya başlar. Böylece insanlığa bu muazzam sistemi kazandırır.

## Tam Olarak Nedir? {#tam-olarak-nedir}

Git, bir tür versiyon kontrol aracıdır. Bu bölüm önemli çünkü sistemin nasıl çalıştığını anlamaya çalışacağız. Önce Git'in diğerlerinden farkına sonra da yapısına bir göz atalım. 

Birçok versiyon kontrol sistemi verileri, dosyalar ve dosyalarda zaman içerisinde yapılan değişiklikler olarak saklar. Bu değişiklikleri de versiyon versiyon tutar.

<figure>
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-2/002.png" alt="" style="width: 60%; margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure> 

Git ise, verileri dosya sisteminin bir dizi **snapshot**'u (anlık görüntüsü) olarak düşünür. Her versiyonda dosya sisteminin anlık resmini çeker ve buna bir referans atar. Dosyalar değişmediyse Git dosyayı yeniden depolamaz, önceden depolamış olduğu dosyaya referans verir. 

<figure>
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-2/003.png" alt="" style="width: 60%; margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure> 

Dolayısıyla bu versiyonlar yerel **repository**'de (şimdilik değişikliklerin saklandığı veri tabanı olarak düşünün) tutulduğu için kolaylıkla erişilebilir ve versiyonlar arasında geçişler yapılabilir.

> Kısaca; Git, **commit**'lerde (değişikliklerin **repository**'e kaydedilme işlemine verdiğimiz özel isim) her dosyanın tüm içeriğini kaydeder. Bu da Git'e sonradan göreceğimiz **branching** (dallanma) gibi faydalar sağlar. Yazının sonraki kısmında Git'in yapısından bahsedeceğiz. Okurken dikkatinizi verin ve odaklanın. Bu kısım kodların işlevlerini anlarken önem teşkil ediyor.

### Git'in Yapısı {#gitin-yapisi}

<figure>
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-2/004.svg" alt="" style="width: 20%; margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="https://www.educative.io/edpresso/what-is-git" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure> 

**Working Directory (Çalışma Dizini):** Bu dizinde dosyalarınız bulunur.

**Staging Area (Hazırlık Alanı) :** Çalışma dizininizdeki **.git** isimli dosyada bulunan ve sonraki versiyona hangi değişikliklerin gireceği hakkında bilgi depolayan dosyadır. Dizinin geçerli içeriğini ve değişikliklerini repoya ekleme işlemine **commit** denir. Her **commit** repoya eklenecek bir versiyonu ifade eder.

**Repository (Repo):** Repository, dosyalarınızdaki değişikliklerin ve bunların bilgilerini versiyonlar şeklinde kaydededildiği yerdir. Çalışma dizinindeki **.git** isimli dizinde depolanır. Git'in yapılandırma dosyaları da bu dizinde tutulur.

- **Local (Yerel) Repository:** Çalışma alanınızdaki **.git** klasörüdür. Bu repoda yalnızca siz çalışabilirsiniz. Yaptığınız değişiklikler diskinize kaydedilir.
- **Remote (Uzak) Repository:** Uzak sunucuda bulunan **.git** dosyasıdır. Aynı proje üzerinde çalışan geliştiriciler bu repository üzerinden değişiklikleri paylaşır.

### Git İş Akışı (Workflow) {#git-is-akisi}

<figure>
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-2/005.png" alt="" style="width: 60%; margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="https://www.bitdegree.org/learn/git-commit-command
" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure> 

Her Git projesinde izleyeceğimiz yol kabaca aynıdır:

1. Çalışma dizinindeki dosyaları değiştiririz.
2. Gerçekleştirdiğimiz değişikliklerden hangilerinin repoya kaydedileceğini belirleriz. Yani sıradaki **commit**'in parçası olmasını istediğimiz değişiklikleri **staging area**'ya ekleriz.
3. Belirlediklerimizi repoya kaydederiz. Yani **staging area**'daki değişiklikleri Git dizinimize kalıcı olarak depolayan **commit** işlemini gerçekleştiririz. **commit** işleminde çalışma dizinindeki tüm dosyaların bulunacağını, eklenmeyen dosyalar için repository'de var olan son hallerine referans atanacağını unutmayın.

Git'te dosyaların bulunabileceği 3 durum vardır:

- **Modified**: Dosyayı değiştirdiğiniz ancak henüz veritabanına eklemediğiniz anlamına gelir.
- **Staged**: Sıradaki **commit**'e eklemek için geçerli versiyonda değiştirilmiş bir dosyayı işaretlediğiniz anlamına gelir.
- **Committed**: Dosyadaki değişikliklerin repoya kaydedildiği anlamına gelir.

> Absürt örneklerde bugün, belki daha iyi anlamanızı sağlayacak belki de kafanızı fena karıştıracak bir örnekle devam ediyoruz. Tamamen kendi prodüksüyonunuz ile hikayedeki ortamı hayal edin.<br><br>
Maide teyzemiz altın günü için müthiş heyecanlı. Kim bilir ne dedikodular çıkacak ortaya. Hazırlıklara bir an önce başlamak istiyor. Öncelikle yapacağı yemekler için alışveriş listesini hazırlıyor. Alışverişe gidiyor. Poğaça hamurlarını yoğuruyor, kısırını yapıyor ve kekini fırına atıyor. Mutfaktaki masasına çatalları, bardakları koyuyor ve yaptığı yemekleri yerleştiriyor. Çayını ocağa koyuyor. Tüm her şeyi tamamladıktan koltuğa oturuyor bacaklarını uzatıp keyif kahvesini yudumluyor. Misafirlerinin gelmesine yakın çatalları, bardakları, yaptığı yiyecekleri ve demlenen çayını teker teker yemek masasına getiriyor. Ve en son masaya şöyle bir bakıyor mükemmel olmuş. O sırada misafirleri zili çalıyor.<br><br>
Bu saçma hikayede; <br>
  - Maide teyze yazılım geliştiriciyi,<br>
  - yaptığı yiyecekler dosyaları,<br>
  - mutfak <b>working directory</b>'i,<br>
  - mutfak masası <b>staging area</b>'yi,<br>
  - oturma odasındaki yemek masası <b>repository</b>'i,<br>
  - yaptığı yiyecekleri mutfak masasına koyması <b>stage</b> işlemini,<br>
  - mutfak masasından yemek masasına koyması <b>commit</b> işlemini temsil eder.

## Peki Github Bu İşin Neresinde? {#peki-github-bu-isin-neresinde}

<figure>
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-2/006.png" alt="" style="width: 60%; margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="https://helpdeskgeek.com/how-to/how-to-view-the-source-code-of-an-open-source-piece-of-software/" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure>

2008 yılında kurulan ve Microsoft tarafından 2018 yılında satın alınan bir şirket. **GitHub** için sürüm Git kullanan projeler için depolama servisidir diyebiliriz. Başka insanlarla çalışabilmek için repolarımızı herkesin erişebileceği bir sunucuda saklamamız gerekir. İşte repolarımızı saklayacağımız servis budur. Her kullanıcı kendi yerel reposunda değişikliklerini yapar ve bu değişiklikler ile ana repoyu günceller.

**Github**, aynı zamanda site üzerinden Git işlemlerini yapabilmemiz için bize arayüzde sağlar hatta masaüstü uygulaması da var. İlerleyen zamanlarda detaylı bakacağız. Ama öncesinde konsolu bir halledelim. Konsolu bilen her türlü aracı kullanabilir.
