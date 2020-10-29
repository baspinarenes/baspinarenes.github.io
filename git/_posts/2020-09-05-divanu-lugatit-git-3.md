---
layout: post
image: assets/img/card-img/git.png
title: "Divanu Lügatit Git - 3 : Git ile Lokalde Takılmak"
excerpt: "Artık elle tutulur uygulamalar yapabileceğimiz kısma geldik. Bu yazıda, Git'in lokal işlemlerine bakacağız. Dosyalarda değişiklik yapacağız, değişiklikleri staging area'ya ekleyeceğiz ve sonrasında **commit** ederek repoya kaydedeceğiz. Lokal bizim kendi bilgisayarımızdaki repo, remote ise ortak repodur. Bunun farkını ileride anlayacaksınız."
toc: true
---

## Seri İçeriği  {#seri-icerigi}

- [Divanu Lügatit Git - 0 : Seriye Giriş](/git/divanu-lugatit-git-0/) 
- [Divanu Lügatit Git - 1 : Versiyon Kontrol Sistemide Nesi?](/git/divanu-lugatit-git-1/)
- [Divanu Lügatit Git - 2 : Git ve GitHub Nedir?](/git/divanu-lugatit-git-2/)
- <span style="font-weight: bold;">Divanu Lügatit Git - 3 : Git ile Lokalde Takılmak</span>
- [Divanu Lügatit Git - 4 : Lokalin Derinlikleri](/git/divanu-lugatit-git-4/)

<br>
Artık elle tutulur uygulamalar yapabileceğimiz kısma geldik. Bu yazıda, Git'in lokal işlemlerine bakacağız. Dosyalarda değişiklik yapacağız, değişiklikleri staging area'ya ekleyeceğiz ve sonrasında **commit** ederek repoya kaydedeceğiz. Lokal bizim kendi bilgisayarımızdaki repo, remote ise ortak repodur. Bunun farkını ileride anlayacaksınız. 

Kötü bir şakayla başlarsam yazıyı bırakıp gitmezsiniz herhalde değil mi :)

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/001.gif" alt="lokalde-takiliyoruz.gif" style="display: block; margin-left: auto; margin-right: auto; width: 80%;"/>

> Yazıya başlamadan önce dosyaların bulunabileceği durumları hatırlatırsak okurken işimiz kolaylaşabilir. Şu şekilde sıralayalım:<br><br>
<b>Tracked:</b> Bir kez staging area'ya eklenmiş, Git tarafından izlenen dosyalardır <br>(sonraki tüm durumlar, Git tarafından izlenen dosyalar için geçerlidir).<br>
<b>Staged:</b> Üzerinde değişiklik yapılmış ve sıradaki **commit** için stage area'ya eklenmiş dosyalardır.<br>
<b>Commited:</b> Üzerinde değişiklik yapılmış ve repoya **commit** ile kaydedilmiş dosyalardır.

## Git'e Kendimizi Tanıtalım  {#gite-kendimizi-tanitalim}

Evet kalan birkaç kişiyle devam edebiliriz. An itibariyle Git nedir ne değildir biliyoruz. Fakat Git bizim kim olduğumuzu bilmiyor. Elbet bir gün çok fazla yazılımcı bulunan projelere dahil olacağız. Bir değişiklik yaptığımızda ekiptekiler bu değişikliği kimin yaptığını nereden bilecekler? İşte burada Git devreye giriyor ve bunu şu yapmıştı diyor. Şimdi konfigürasyon ile biraz oynayarak Git'e kendimizi tanıtalım:

```bash
$(~) git config --global user.name  "Enes Başpınar"
$(~) git config --global user.email "enesbaspinar07@gmail.com"
```

Bu komutlardan sonra Git artık adımızı ve diğer kişilerin bize ulaşabileceği mail adresimizi commit'lerde gösterebilecek.

> Bazı ifadeleri kullanmadan önce açıklamak istiyorum. Bu kısımları bilmenize gerek yok ama bilmek, işi anlamlı kılar ve öğrenmeyi kolaylaştırır :) Öyleyse komutların yapısı hakkında basit birkaç bilgi verelim. İlk kelime, çalıştırılacak program dosyasını ifade eder. Yani biz git komutlarında git programını (örneğin Windows'ta git.exe) çalıştırıyoruz. Diğer kelimeler ise boşluklardan bölünerek programa argüman olarak gönderilir. git programına **config** argümanını gönderirsek konfigürasyonla ilgili işlem yapması gerektiğini anlar. Sonrasındaki "-" ile başlayan bir ifade gelir. İşte bu ifadelere **flag** yani bayrak denir ve komutun davranışını değiştirirler. Bir sonraki paragrafta göreceksiniz `--global` davranışı değiştirir.

Ayarlarımızın oluşturacağımız tüm repolarda geçerli olması için `--global` bayrağını kullanacağız (global config dosyasında saklanır, benim için bu konum /home/enesbaspinar/.gitconfig). Eğer bu bayrağı kullanmazsak varsayılan bayrak olarak `--local` kullanılır ve sadece içinde olunan repoda geçerli olur (**.git** içerisindeki config dosyasında saklanır).

Tüm ayarları görelim bakalım Git şu ana kadar neler biliyor. Bunun için `--list` bayrağını kullanacağız:

```bash
$(~) git config --list
```
<figure style="margin-bottom: 80px;">
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/002.png" alt="Yerel versiyon kontrol şeması" style="margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="{{ site.baseurl }}/linux/terminale-renk-katalim/" style="font-size: 16px; text-decoration: underline;">Linux kullanıyorsanız bu terminale sahip olmak için ilgili yazıma bakabilirsiniz!</a></figcaption>
</figure>


> Bu komut, Git reposunun içerisinde veya dışarısında olmasına göre farklı çıktı verebilir. Eğer repodayken komutu çalıştırırsanız sadece global ayarları, reponun içindeyken çalıştırırsanız hem global ayarları hem repoya özgü ayarları listeler.

İsterseniz Git'e bir de en çok sevdiğimiz editörü söyleyelim. **core.editor** değişkeni Git'in editör gerektiren işlerini halletmek için kullanacağı editördür. Dolayısıyla belirledikten sonra bizim sevdiğimiz editörü kullanmaya başlayacak. Ben VSCode kullanıyorum bu yüzden onu ayarlayacağım, siz başka bir editör kullanmak isterseniz internette kısa bir araştırma yapabilirsiniz:

```bash
$(~) git config --global core.editor "code --wait"
```

Komuttaki `--wait` bayrağı, konsola geri dönmek için editördeki dosyanın kapanmasının beklenmesini sağlar.

> Seri genelinde komutların her şeyine değineceğiz. Bu benim bir şeyler okurken yaşadığım sorunlardan biri. Yapıyorum ama neden yapıyorum, bu eklediğimiz şey ne işe yarıyor diye soruyorsanız o yazıda bir şeyler eksiktir. İşte bu yüzden bu yazıda elimden geldiğince eksik bir şey bırakmamaya çalışacağım.

Konfigürasyon dosyamıza da göz atmadık demeyelim:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/003.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Evet ayarlarımızı yaptığımıza göre şov başlasın. İlk Git repomuzu oluşturalım.

## Git Reposu Oluşturma {#git-reposu-olusturma}

Git reposu oluşturmak için iki seçeneğe sahibiz. Biri sıfırdan bir repo oluşturmak diğeri ise başka bir yerde var olan bir repo kopyalamak. İkinci seçeneğe ileride bakmak üzere şu anlık veda ederek devam edelim.

Repo oluştururken bulunduğumuz dizin önem arz eder. O yüzden dizine dikkat edin. Linux'ta `pwd` komutu ile nerede olduğunuza bakabilirsiniz. Şimdi bir dizin oluşturalım ve o dizini Git projesi haline getirelim: 

```bash
$(~) mkdir deneme-git-projesi/ && cd deneme-git-projesi/ 
# linux'un mkdir komutu, yeni dizin oluşturur. cd komutu, başka dizine geçiş yapar.
# '&&' ise iki işlemin tek satırda yapılmasına olanak sağlar.
$(~/deneme-git-projesi) git init
```

`git init` komutu, Git'in her şeyi takip etmek için kullanacağı dosyaları ve dizinleri oluşturur. Bunlar **.git** dizininde depolanır. Parametre olarak dosya yolu vererek bulunmadığımız bir dizinde de oluşturabiliriz.

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/004.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Terminaldeki çıktı bize ilgili dizinde boş Git reposu tanımlandığını söyler. Dosya içeriğine bakarsanız ilk bakışta bir fark göremeyebilirsiniz. Çünkü dizin gizlidir. Gizli olanları da listeleyecek bir bayrak kullanırsak ortaya çıkacaktır:

```bash
$(~/deneme-git-projesi) ls -la 
# linux'un ls komutu ile bir dizindeki dosyaları listeleriz.
# -a bayrağı, gizli dosyaları da listeler.
# -l bayrağı, listelerken bazı dosya bilgilerini gösterir.
```

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/005.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Bu aşamada kısa bir özet geçsek fena olmaz. Git dizini (**.git** ) dosyalarımızın versiyonlarını, proje geçmişini ve konfigürasyon dosyalarını barındıran repository'dir. Örneğimizdeki **deneme-git-projesi** dizini ise working directory'dir. Yani dosyalarımızı burada oluşturacağız ve burada değiştireceğiz.

## Çalışma Dizinine Dosya Ekleme {#calisma-dizinine-dosya-ekleme}

Git projesi oluşturduk. Artık dosya eklemeye başlayabiliriz. İlk dosyamızı oluşturalım ve kaydedelim:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/006.png" alt="git-gite-ogreniyoruz-3-2.png"/>
Şimdi terminalimize dönelim ve repomuzun durumuna bakalım:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/007.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Ve işte en çok kullanacağımız komut ile tanışmış olduk. `git status` komutu, repomuzun bulunduğu durumunu gösterir. İzlenmeyen, değişen, silinen, yeni eklenen ve stage edilen dosyaları söyler ve önemli bilgiler sağlar. Ayrıca göreceğiniz üzere kullanabileceğimiz bazı komutları da belirtir. Harika!

**"No commits yet"** henüz **commit** yapılmadığını yani reponun boş olduğunu, **"Untracked files"** ise çalışma dizinine yeni eklenen dosyaları belirtir. Son satırdaki ifade ise **commit** için hazır olan değişikliğin olmadığını ancak izlenmeyen dosyaların olduğunu belirtir.
Şimdilik bunları bilsek yeterli olacaktır.

> Seri boyunca komutların yazdırdığı her şeyden bahsetmeye çalışacağız. Ancak yerinde ve zamanında. O yüzden gönül rahatlığıyla ilerleyebilirsiniz.

## Dosyaların Git Tarafından İzlenmesi {#dosyalarin-git-tarafindan-izlenmesi}

Çalışma dizinimize ilk dosyamızı ekledik ancak henüz Git dosyayı izlemiyor yani bir değişiklik yaparsak farketmez. Bunu hemen dosyamızı değiştirerek görebiliriz:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/008.png" alt="git-gite-ogreniyoruz-3-2.png"/>

`git status` komutunu çalıştırıp görelim bakalım değişiklik var mı:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/009.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Şimdi dosyamızı **Staging Area**'ya ekleyelim ve `git status` komutunu çalıştıralım:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/010.png" alt="git-gite-ogreniyoruz-3-2.png"/>

`git add` komutu, dosyaları ileride repoya kaydedilmek üzere **Staging Area**'ya taşır. Burada değişiklikleri son kez kontrol edebilir ve üzerinde oynamalar yapabiliriz.

"**Changes to be commited**", **Staging Area**'da bulunan ve sıradaki **commit** için hazır dosyaları gösterir.

> Burada hemen detaylandıralım. Dosyalarda kullandığımız ilk `git add` komutunun özel bir anlamı vardır, artık bu dosyayı izle ve değişiklik yapılırsa bana bildir demiş oluruz. Git dosyayı izlemeye başlamadan önce değişiklik yapmayı denersek, önceki örnekteki gibi, dosyanın hala "untracked" olduğunu yani değişikliği farketmediğini görebiliriz.

## Değişiklikleri Repoya Kaydetme {#degisiklikleri-repoya-kaydetme}

Artık yaptığımız değişiklikleri repoya kaydedebiliriz. Şimdi farkı görmek için bir tane daha dosya oluşturalım:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/011.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Sıkılmak yok. `git status` bizim her şeyimiz, canımız ciğerimiz. O yüzden tekrar tekrar kullanıyor olacağız. İkinci dosya ile beraber reponun son durumuna bir bakalım:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/012.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Birinci dosyamız henüz Git tarafından izlenmiyor ama ikinci dosyamız **Staging Area**'da bulunuyor. Şimdi **commit** ile bu değişikliklerimizi repoya kaydedelim bakalım neler olacak:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/013.png" alt="git-gite-ogreniyoruz-3-2.png"/>

`git commit` komutu, stage edilmiş değişikliklerimizi repoya kaydederek yeni bir **commit** yani versiyon oluşturur. Komutu kullandığımızda **"Waiting for your editor to close the file..."** çıktısını görürüz. Sonrasında belirlediğimiz editör açılır:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/014.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Bu aşamada **commit** mesajına kısaca değinelim. **commit** mesajı, o commit'te yapılan değişiklikler hakkında bilgilendirme yazısıdır. Hepsinde olması zorunludur. Sizin veya bir ekip arkadaşınızın sonraki zamanlarda baktığında yapılan değişiklikler hakkında fikir edinmesini sağlar.

Editörün içerisinde **commit** mesajını içerecek olan dosya, Git tarafından bazı şeyler yazılmış olarak gelir. Yorum satırları içerisinde `git status` çıktımızın bir kopyası yer alır. Commite girecek dosyaları bu şekilde teyit edebiliriz. Eğer yanlış bir şey varsa dosyayı kaydetmeden boş bir şekilde kapatabiliriz. Git, mesaj girilmediği için işlemi iptal eder.

İşlem sonrasında terminal böyle görünecektir:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/015.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Git, bize 1 dosyanın değiştirildiğini ve 2 satır eklendiğini söyler. `git status` komutunu çalıştırdığımızda değişikliğin olduğu dosyanın repoya eklendiği için kaybolduğunu görebiliriz:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/016.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Bunun sebebi repodaki ve çalışma dizinindeki dosyanın son halleri arasında fark olmamasıdır. dosya2.txt repoda olmadığından dolayı kırmızı olarak görünür. Kısacası `git status` komutunun çıktısında gördüğünüz dosyalar çalışma dizini ile repoda arasındaki farklı olan dosyalardır.

Yeni bir tane daha oluşturup birden fazla dosya eklemeyi de görmüş olalım:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/017.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Çalışma dizinimizde, repoda bulunmayan 2 dosyamız olduğunu görebiliriz:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/018.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Birden fazla dosyayı stage etmek için `git add dosya1 dosya2 dosya3`, tüm dosyaları stage etmek için `git add .`, `git add -A`, `git add --all`, gizli olan (. ile başlayan) dosyalar haricindekileri stage etmek için `git add *` komutlarını kullanabilirsiniz. Hangisi hoşunuza giderse artık.

Şimdi iki dosyayı birlikte stage edelim:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/019.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Bu sefer **commit** ederken farklı bir yol izleyelim. Editörle uğraşmadan kısa bir mesaj girelim. Bunun için `git add` komutunun "message" kelimesini ifade eden `-m` bayrağını kullanabiliriz:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/020.png" alt="git-gite-ogreniyoruz-3-2.png"/>

> Peki neden kısa hali varken diğerini kullanayım ki diyecek olursanız bazen **commit** mesajlarında daha fazla detay belirtmemiz gerekebilir. Örneğin şirketlerin belirli standartları olabilir. **Commit** mesajlarının önemini sonraki yazıda göreceğiz. O zamana kadar başka bir şey bilmenize gerek yok.

Bu yazıdaki son `git status` komutunu da kullanarak son durumu görelim:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-3/021.png" alt="git-gite-ogreniyoruz-3-2.png"/>

Projemiz tertemiz gözüküyor. Yani çalışma dizinimizde gerçekleştirdiğimiz tüm değişiklikler repoda kayıt altına alınmış durumda. Diğer bir deyişle, son snapshot ile çalışma dizinimizin şuanki hali aynı. Bu arada working tree, working directory'nin diğer ismidir. Yazılımın her kısmında olduğu gibi Git içerisinde de her kafadan bir isim üretilen bazı kavramlar var :)
