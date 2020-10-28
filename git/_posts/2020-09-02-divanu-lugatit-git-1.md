---
layout: post
image: assets/img/card-img/git.png
title: "Divanu Lügatit Git - 1 : Versiyon Kontrol Sistemide Nesi?"
excerpt: "Seriye başlamaya hazırsak buyrun ilk yazımız. Bu yazıda, Git'in arkasındaki güce yani versiyon kontrol sistemlerine kısa bir göz atacağız."
---

## Seri İçeriği

- [Divanu Lügatit Git - 0 : Seriye Giriş](/git/divanu-lugatit-git-0/)
- <span style="font-weight: bold;">Divanu Lügatit Git - 1 : Versiyon Kontrol Sistemide Nesi?</span>
- [Divanu Lügatit Git - 2 : Git ve GitHub Nedir?](/git/divanu-lugatit-git-2/)
- [Divanu Lügatit Git - 3 : Git ile Lokalde Takılmak](/git/divanu-lugatit-git-3/)
- [Divanu Lügatit Git - 4 : Lokalin Derinlikleri](/git/divanu-lugatit-git-4/)

<br>
Seriye başlamaya hazırsak buyrun ilk yazımız. Bu yazıda, Git'in arkasındaki güce yani versiyon kontrol sistemlerine kısa bir göz atacağız.

## Versiyon Kontrol Sistemi (VCS) Nedir?

"Şimdi bir dakika tane tane gidelim, versiyon da ne?" derseniz önce kısaca tanımlayalım. Bir projedeki dosyaların zaman içerisindeki herhangi bir durumuna **versiyon** denir. Küçük bir örnek:

![versiyon-ornegi]({{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-1/001.png)

Yeni bir proje klasörü oluşturduk ve okuldan verilen proje ödevini burada yapacağız. Başlangıçta A dosyasını oluşturduk. Bu dosyayı oluşturduktan sonraki durumu projemizin bir versiyonu olarak düşünün. Sonrasında denemeler yaptığımız A dosyasını sildik ve B ve C isimli iki yeni dosya oluşturduk. Bu da başka bir versiyonumuz. Sonrasında ise B dosyasında değişiklik yaptık, bu da bir diğer versiyonumuz olmuş oldu. Yani daha resmi izah edersem **versiyon**, projemizin tarihsel gelişim çizgisindeki her bir noktadır.

**Versiyon kontrol sistemi** ise projenin farklı versiyonlarını yönetmemize yardımcı olan bir yazılımdır. Versiyonlar arasında karşılaştırma yapabilmemizi, yaptığımız hatalı işlemlerden sonra dosyaların çalışan hallerine geri dönebilmemizi, değişikliklerin kim tarafından, ne zaman, ne için yapıldığını görebilmemizi sağlar.

> Bu yazıdakileri ezberlemenize hiç gerek yok ancak ne olduklarının kafanızda şekillenmesi önemli. Absürt örnekleri çok sevdiğimi ve seride çokca kullanacağımı söyleyebilirim. İşte ilki! İlk telefonunuzu aldığınızı ve tüm özelliklerini henüz bilmediğinizi düşünün. Telefondan internete girilebildiğini bilmiyorsanız, internete girmeyi karıştırırken zor bela öğrenebilirdiniz değil mi?

Ekip çalışmasına sağladığı faydayı da es geçmeyelim. Çok fazla kişinin aynı projede çalışması gerektiğini düşünün. Ne yapardınız? Whatsapp üzerinden kod mu gönderirdiniz? Yapmayın lütfen. Burada ekip diyince 2-3 kişinin değilde 100 kişinin kodları birbirleriyle paylaştığını düşünün. Neler yaşanırdı?

<figure>
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-1/002.jpg" alt="Yerel versiyon kontrol şeması" style="width: 60%; margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="https://eksiup.com/p/td281044ne92" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure>

Versiyon kontrol sistemi bu sorunları güzel yöntemlerle halleder. Başkasıyla yaptığınız değişiklikler çakışırsa size yardımcı olur. Başkasının yaptığı değişikliğin sebebini anlamanızı sağlar. Ve daha bir çok faydası var.

Biliyorum çok uzattım ama kurs boyunca bana biraz sabretmeniz lazımki birlikte bir şeyler öğrenebilelim. Bu arada lütfen kavramların arasında kaybolmayın. İleride gördüğünüzde "Ha ben bunu bir yerden anımsıyorum." diyecek kadar fikir sahibi olmanız kafi. Koyvermeyin gözünüzü seveyim, daha atacak çok adımımız var.

> Öğrendiğimde küçük bir aydınlanma yaşadığım bir şeyden bahsetmek istiyorum . Aslında bilgisayar kullanan herkes bir nevi versiyon kontrol sistemi kullanıyor peki nasıl? CTRL+Z! Yazı yazdığınızda geri almak için CTRL+Z kullandığımızda aslında yazının önceki versiyonuna geçiş yaparız. Küçük bilgiler beni bazen gereksiz mutlu edebiliyor.

Şimdi azıcık ucundan çeşitlerine bakalım. Bunlardan bizi ilgilendiren aslında sondaki ama o aşamaya gelene kadar insanlar neler çekmiş ve ne için yeni sistemlere gereksinim duymuşlar baksak güzel olur. Buyrun başlayalım.

### Yerel Versiyon Kontrol Sistemi (Local Version Control System)

Kullanıcıların dosyalarda yaptığı değişiklikler, yine kendi bilgisayarlarındaki özel bir veritabanında parçalar halinde tutuldu.

<figure>
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-1/003.png" alt="Yerel versiyon kontrol şeması" style="width: 60%; margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure> 

Nasıl bir şeydi acaba diye benim gibi merak ettiyseniz sevindim. Merak duymak, öğrenme isteğinizde samimi olduğunuzu gösterir. Git'i kısa zamanda aradan çıkaracağınızdan hiç şüphem yok. Şuna bir göz atın:

<div class="iframe-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/RMQKp_D_9Hc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>
</div>

İnsanlar yerel VCS'yi kullanarak projelerini yürüttü ancak bir zaman sonra başkalarıyla birlikte çalışmak ihtiyacı doğdu. Sonucunda merkezi sistem geliştirildi.

> Tekrar hatırlatmakta fayda var. Teorik bilgi kimsenin aklında kolayca yer etmez. Bunun yerine Git kısmında bunları bizzat yakından göreceğiz. Deneyimden daha iyi bir öğrenme yöntemi olabilir mi?

### Merkezi Versiyon Kontrol Sistemi (Centralized Version Control System)

Bütün dosyalar ve versiyonları, tek bir sunucudaki veritabanında tutulup denetlenmeye başlandı. Her geliştirici değişikliklerini merkezi veri tabanına kaydetti (şimdilik böyle bilin).

<figure>
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-1/004.png" alt="Merkezi versiyon kontrol şeması" style="width: 60%; margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure> 

İnsanlar merkezi VCS'yi kullanarak projelerini yürüttü ancak tek bir yere kaydedildiği için ortaya bir çok karmaşa çıktı. Aynı anda değişikliklerin gönderilmesi durumunda sorunlar yaşandı, küçük bir değişiklik için uzun süreler beklenmeye başlandı. İnternet bağlantısı olmama durumunda sunucuya erişilemediğinden başkalarının değişiklikleri takip edilemedi ve yapılan değişiklikler gönderilemedi. Veriler kaybedildiğinde emekler suya düştü. Bunların sonucunda dağıtık sistem geliştirildi.

### Dağıtık Versiyon Kontrol Sistemi (Distributed Version Control System)

Dağıtık sistemlerde proje yönetimi, sunucu tarafında değil geliştirici tarafında yapılmaya başlandı. Yani, her geliştiricinin bilgisayarında veritabanı oldu ve geliştirici değişiklikleri kendi veritabanına uyguladı. Sonrasında sunucudaki veritabanını kendi veritabanı ile güncelledi. 

Dikkat çekilmesi gereken nokta ise geliştiricilerin bilgisayarında yalnızca dosyaların son hali değil veritabanının geçmişinin de (dolayısıyla dosyaların eski versiyonları) tutulmasıydı. Dolayısıyla birinde sorun oluşsa bile veritabanı kolayca diğer kullanıcılardan temin edilebildi.

<figure>
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-1/005.png" alt="Dağıtık versiyon kontrol şeması" style="width: 60%; margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure> 

İşte böyle. VCS'ler kısaca bu şekilde. Kafanızda bir şeyler oluştuysa ne ala, oluşmadıysa üzülmeyin detayına pratik yaptığımızda vakıf olacağız.

> Bir diğer absürt örnek geliyor aman kafalara dikkat! Bir takım yönettiğinizi düşünün. Bu takımı yönetmek için VCS kullanıyorsunuz. Kadro değişikliği yapacaksınız ama önceki kadroyu defterinize kaydediyorsunuz. Yardımcı teknik direktör gelip bir oyuncu değiştiriyor bu daha iyi sonuç verir diye. Bakıyorsunuz ve yaptığı açıklamalar mantıklı geliyor kadroyu bu yönde güncelliyorsunuz. Maçlar geçtikçe deneyimler ile gerekirse yeni kadrolar oluşturuyor ve defterin sayfalarına yeni kadroları işliyorsunuz. Ama o da ne? Takımdaki uyum bozuldu. Böyle giderse nasıl şampiyon olacaksınız? Hemen son sayfayı koparıp atıyorsunuz ve başarılı olan bir önceki kadroya dönüyorsunuz. Eğer son planlama daha iyi sonuç verseydi o kadroyu kullanıp en iyi hale gelene kadar onun üzerinden değişiklik yapmaya devam edecektik. Durum böyle. İnşallah yardımcı teknik direktörünüz iyidir. Yoksa Allah yardımcınız olsun.

Bu örnekten sonra "Diablo sende bir dur kardeşim zaten ortalık karışık" diyecek olursanız sizi versiyon kontrol sistemlerini ve Git'i güzelce anlatan Uğur Arıcı hocamızın videosuna yönlendiriyorum. İkinci videosunu da izlemeyi unutmayın.

<div class="iframe-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/lxsff7o0vjU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>
</div>

"Merkezi ve dağıtık sistemin farkını anlayamadım." diyorsanız da şuna bir bakın (videodaki yazılımcıların sırt kısımlarının sistemlere göre bükülmesi çok iyi değil mi, böyle küçük şeylere bayılıyorum):

<div class="iframe-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/_yQlKEq-Ueg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>
</div>