---
layout: post
image: assets/img/card-img/c-dilleri.png
title: "Pointer'landıramadıklarımızdan Mısınız?"
excerpt: "C dillerinde pointer'dan kaçışınız yoktur. Artık pointer'ları herkesin anlayabileceği bir seviyeye çekelim."
toc: true
---

Yazılımın başında C, C++ gibi dillere denk geldiyseniz bu kavramdan kaçışınız yoktur. Ancak bir türlü kafamıza oturmaz. Artık pointer'ları herkesin anlayabileceği bir seviyeye çekelim.

## Değişkenler Nereye ve Nasıl Kaydedilir?

Programlamanın bir aşamasında "Tanımladığımız değişkenler nereye gidiyor?" diye hepimiz düşünmüşüzdür. Cevap basit: RAM belleğe. 

RAM bellek, alt alta kutular şeklinde tasvir edilir denk gelmişseniz. Her biri 8 bit yani 1 bayt yer kaplayan kutula halinde. 1 GB kapasitesi olan RAM'de 1.073.741.824 adet kutu vardır. Bu da 4 bayt yer tutan tamsayılar ile dolduracak olursak maksimum 268.435.456 adet tam sayı saklayabileceğimiz anlamına gelir.

Her bir kutunun kendine özel, bellekte bulundukları konumu tarif eden adresi vardır. Bu sayede CPU kutulara veri yerleştirebilir ve yerleştirdiği verilere sonradan erişebilir. 


<blockquote style="text-align: center;">
Adresler sayıdır ancak bildiğimiz sayılardan değil.<br>16'lık (hexadecimal) tabanda ifade edilirler.
</blockquote>

Örneklendirmeye bir tam sayı değişkeni tanımlayarak başlayalım:

```c
int dogum_tarihi = 1999
```

> Şunu anlamakta yarar var: bellekteki her değere adresi ile erişim sağlarız. Ancak programlama dillerinde bununla uğraşmamıza gerek bırakmayan değişken kavramı vardır. Biz bu ismi verdiğimizde CPU hangi adrese bakacağını anlar. Örnekteki `dogum_tarihi` dediğimizde CPU "He tamam, bu 1999 değerini istiyor." der.

Günlük yaşantımızda sayıları 10 tabanında (decimal) kullanıyoruz. Ancak bilgisayarlar bunları anlayabilmek için 2 tabanına (binary) çevirmek zorunda. Bellek temsillerinde ise nedenini bulamadım ancak 16 tabanını (hexadecimal) kullanılıyor. Aşağıda 1999 değerinin bu tabanlardaki halini görebilirsiniz:

![]({{ site.baseurl }}/assets/img/posts/c-c++-posts/anlayamadiklarimiz-pointer/001.png)

Değişkenin bellekteki şekline bakalım. 16 tabanındaki karşılığını sırayla kutulara ikişerli olarak yerleştiririz:

![]({{ site.baseurl }}/assets/img/posts/c-c++-posts/anlayamadiklarimiz-pointer/002.png)

İkişerli yerleştirme sebebimiz, 2'lik tabandaki her 8 bite karşılık 16'lık tabanda 2 karaktere karşılık gelmesidir. Ve bu kısma özel bir isim vererek `dogum_tarihi` dedik:

![]({{ site.baseurl }}/assets/img/posts/c-c++-posts/anlayamadiklarimiz-pointer/003.png)

Artık biz `dogum_tarihi` değişkenini çağırdığımız zaman, CPU belleğe gider ve değişkenin başlangıcı adresi olan **90000008** adresine uğrar. Değişken int ise 4 bayt olacaktır. Dolayısıyla 4 kutu okur ve birleştirir. Yani **00 00 07 CF** değerini elde eder ve 10 tabanına çevirerek 1999 sayısını verir.

## Bellek Adresini Bilmek Ne İşimize Yarar?

Verinin kendisi yerine adresini kullanmak, onu kopyalamadan birden fazla yerden erişim sağlayabilmemizi ve değişiklik yapabilmemizi sağlar. Bellekte gereksiz yer işgalini önlemiş oluruz.

> Bir otonom araba hayal edin. Kameradan gelen görüntüler belleğe kaydediliyor ve  birden fazla programda kullanılıyor. Bir program bu görüntüler ile yolu takip ediyor, bir diğeri yayaları takip ediyor, başka bir tanesi ise trafik ışıklarını takip ediyor. Şimdi her program için görüntüleri kopyaladığımızı düşünün. Görüntülerin kaplayacağı alan birden 3 katına çıktı. Şimdi bir de bu programlara yalnızca resimlerin adreslerini verdiğinizi hayal edin. Her biri ordan alıp işini görebilir. Ne bellek doldurulmuş olur ne de programlar veriden mahrum kalmış olur.

## Değişkenlerin Adreslerini Nasıl Elde Ederiz?

Burada devreye, bellek adresi tutan değişkenler girer. Değerleri nasıl değişkenlerde depolayabiliyorsak bellek adreslerini de aynı şekilde depolayabiliriz. Bunu gerçekleştiren yapılara **pointer** denir. Aslında **pointer**'da bir değişkendir.

Önceki kısımda görsel olarak anlattığımız örneği kodlama ortama dökelim. İlk olarak değişken tanımımızı yapalım:

```cpp
int dogum_tarihi = 1999;
```

Dediğimiz gibi `dogum_tarihi` 1999 tamsayı değerini depoluyor. Şimdi bu değerin bellekteki adresini elde edelim:

```cpp
// 1. tanımlama biçimi
int* dogum_tarihi_ptr = &dogum_tarihi;

// 2. tanımlama biçimi (atamayı daha sonra yap)
int* dogum_tarihi_ptr;
dogum_tarihi_ptr = &dogum_tarihi; // yıldız yok dikkat edin.
```

<blockquote style="text-align: center;">
Pointer'ları belli etmek için genellikle ismin başına<br>veya sonuna "p", "ptr" gibi eklemeler yapılır.
</blockquote>

Şimdi bu sözdizimini inceleyelim.

`dogum_tarihi_ptr` değişkenimizin türü, göreceğimiz üzere `int*`. Bu da bize tamsayı değişkenin adresini tutan pointer olduğunu gösterir. Değişkenin başına koyduğumuz `&`  işareti ise değişkenimizin adresini elde etmemize yarayan **address-of** operatörüdür. Yani `&dogum_tarihi`, `dogum_tarihi` değişkeninin bellekteki adresidir.

Şöyle genel biçimde tekrar edecek olursak; `dogum_tarihi_ptr` **pointer** değişkeni, `dogum_tarihi` değişkeninin bellek adresini işaret eder:

<img src="{{ site.baseurl }}/assets/img/posts/c-c++-posts/anlayamadiklarimiz-pointer/010.png" alt="" style="display: block; margin-left: auto; margin-right: auto; width: 70%;"/>

Şu iki çıktıya bakarsak `&` işaretinin ne işe yaradığı daha net anlaşılabilir:

```cpp
printf("%d\n", dogum_tarihi);
// bellek adreslerini yazdırmak için
// özel %p belirteci kullanılır.
printf("%p\n", &dogum_tarihi);
printf("%p\n", dogum_tarihi_ptr);

/* ÇIKTI:
1999
0x7ffd83c692bc
0x7ffd83c692bc
*/
```

Hemen toparlayalım. `dogum_tarihi` ifadesi, bildiğimiz **int** değişkenidir. Ve 1999 sayısını depolar. `&dogum_tarihi` ifadesi, değişkenimizin adresidir. `dogum_tarihi_ptr` ifadesi ise elde ettiğimiz adresi depoladığımız değişkendir. Tipi ise __int*__ dir. Yani değişken adresi depolayan değişken diyebiliriz :)<br><br>

Bu kısmı tamamlarken bir noktaya daha değinmekte fayda görüyorum.

Pointer tanımlarken `int *dogum_tarihi_ptr`, `int* dogum_tarihi_ptr` sözdimlerinden herhangi birini kullanabiliriz. Yıldızın sabit konumu yoktur, sadece tip ile değişken ismi arasında olmalıdır. Ancak C/C++ programcıları geleneksel olarak `int *dogum_tarihi_ptr` yazımını kullanılır. Bunun sebebi aşağıdaki kullanımda yarattığı kafa karışıklığıdır:

```cpp
int* ptr_a, ptr_b;
```

Buradaki iki değişkeninde pointer olacağını düşünüyorsunuz değil mi? Ancak `ptr_a` pointer iken `ptr_b` int değerdir. Şu şekilde yazılmış gibi kabul edilir:

```cpp
int* ptr_a;
int ptr_b;
```

Bu yüzden aşağıdaki şekilde kullanırsak, herhangi bir sorun oluşmaz:

```cpp
int *ptr_a, ptr_b;
```

Değişken ismine bitişik olduğu için değişkene ait olduğundan emin oluruz.

## Adresler ile Değişken Değerlerine Erişmek

Değişkenin adresini elde edebileceğimiz gibi adres yardımıyla değişken değerine de erişebiliriz. Şu görsele göz atalım ve sonrasında birlikte inceleyelim:

![]({{ site.baseurl }}/assets/img/posts/c-c++-posts/anlayamadiklarimiz-pointer/004.png)

Örneğin elimizdeki doğum tarihi bilgisini kullanıcının yanlış girmiş. Bunu değiştirmek istiyor. Elimizde hem değişken hem de adresini tutan **pointer** var:

```cpp
int dogum_tarihi = 1999;
int *dogum_tarihi_ptr = &dogum_tarihi;
```

Değişkenlerin değerini nasıl değiştirebileceğimizi zaten biliyorduk:

```cpp
dogum_tarihi = 1990;
```

<blockquote style="text-align: center;">
"Peki neden hala o yöntemle değiştirmeye devam etmiyoruz?" diyorsanız çoğunlukla öyle yapacak olacak olsakta bazı zamanlar gelecek ki <br><b>pointer</b> kullanmak zorunda kalacağız. İleride göreceğiz.
</blockquote>

Artık pointer vasıtasıyla da değiştirebiliriz:

```cpp
*dogum_tarihi_ptr = 1990;

printf("%d", dogum_tarihi_ptr);
printf("%d", *dogum_tarihi_ptr);

/* ÇIKTI:
0x7ffc0206d83c  // başındaki "0x" hexadecimal olduğunu belirtir.
1990
*/
```

Burada kafalar çorba olabiliyor. **Pointer** tanımlanırken kullanılan `*` işareti, onun pointer olduğunu belirtmek için konur ve başka amacı yoktur. Ancak tanımlandıktan sonra kullanacağımız her `*` işareti, **pointer**'ın işaret ettiği adresteki değeri temsil eder. Buradaki yıldız işaretine **dereference operator** denir. 

## Adresler ile Dizi Elemanlarına Erişmek

> Bu kısma geçmeden önce küçük bir ipucu vermek istiyorum. String değişkenler tanımlarken `char[] isim = "Ahmet"` şeklindeki bir kullanıma denk gelmişsinizdir. C'de aslında string diye bir tip yoktur. Son elemanının `\0` karakteri olan karakter dizileri ile ifade edilirler. Yani bu anlatacaklarım onlar için de geçerli olacak.
</blockquote>

Dizi isimleri farklı kullanımlarda farklı anlam ifade edebilirler. **Pointer** kavramı, dizileri anlamak için önemlidir. Bu sebeple bir dizi oluşturup **pointer** ile ilişkisini görelim:

```cpp
int sayi_dizisi[] = {10, 20, 30};
```

Dizinin ismi, ilk elemanın adresini tutar. Dolayısıyla pointer gibi davranır. Aşağıdaki çıktılara bakacak olursak bunu net bir şekilde görebiliriz:

```cpp
printf("%p\n", sayi_dizisi);     //dizinin ismi
printf("%p\n", &sayi_dizisi);    //dizinin adresi
printf("%p\n", &sayi_dizisi[0]); //ilk elemanın adresi

/* ÇIKTI:
0x7ffcd4fb610c
0x7ffcd4fb610c
0x7ffcd4fb610c
*/
```

Üçünün de aynı olduğunu ve diziye erişeceğimiz adresi verdiklerini görebiliriz. Özetleyecek olursak; diziler, temel veri tipleri gibi değer tutmak yerine dizinin ilk elemanının adresini tutar. Bunu `sayi_dizisi` ifadesini yazdırarak görebiliriz. `&sayi_dizisi` dediğimizde dizinin adresini elde ederiz. Ve dizinin ilk elemanı ile aynıdır. Son olarak `&sayi_dizisi[0]` ifadesiyle dizimizin ilk elemanının adresine bakıyoruz ki ki bu da aynıdır.

`printf()` ile kullandığımızda dizinin adresini ifade eder ancak bazı durumlarda da dizinin değerini temsil eder. Örneğin `sizeof()` fonksiyonuna gönderirsek, pointer boyutunu değil dizi değerinin boyutunu verecektir:

```cpp
printf("%d", sizeof(sayi_dizisi)); // 4 bayt * 3 = 12 bayt

/* ÇIKTI:
12
*/
```

Yani adresi yerine gerçek diziyi kullandığımız anlamına gelir.

## Pointer Aritmetiği

Kullandığımız diziyi tekrardan hatırlayalım ve adresini tutan ekstra bir pointer oluşturalım:

```cpp
int sayi_dizisi[] = {10, 20, 30};
int *sayi_dizisi_ptr = sayi_dizisi;
// &sayi_dizisi de yazılabilir
```

`sayi_dizisi` zaten adres tutuyordu değil mi? İkinci bir yerde daha tutmak için `sayi_dizisi_ptr` **pointer**'ını oluşturduk.

Dizimizin bellekteki durumunu görselleştirelim:

![]({{ site.baseurl }}/assets/img/posts/c-c++-posts/anlayamadiklarimiz-pointer/005.png)

Dizilerin elemanlarına erişmek için indeksleri kullanıyorduk (bir sonraki kısımda karşılaştıracağız). Ancak arkada neler dönüyor merak ediyoruz. İşte bunu **pointer** yardımıyla anlayabiliriz. 

Her bir elemana dizi adresine uyguladığımız aritmetik işlemler ile erişiyoruz. Şu örneğe bakalım:

```cpp
printf("ilk adres: %p\n", sayi_dizisi_ptr);
printf("ilk eleman: %i\n", *sayi_dizisi_ptr);

sayi_dizisi_ptr += 1;

printf("ikinci adres: %p\n", sayi_dizisi_ptr);
printf("ikinci eleman: %i\n", *sayi_dizisi_ptr);

sayi_dizisi_ptr += 1;

printf("son adres: %p\n", sayi_dizisi_ptr);
printf("son eleman: %i\n", *sayi_dizisi_ptr);

/* ÇIKTI:
ilk adres: 0x7ffcd4fb610c
ilk eleman: 10
ikinci adres: 0x7ffcd4fb6110
ikinci eleman: 20
son adres: 0x7ffcd4fb6114
son eleman: 30
*/
```

İsmin ilk öğeye işaretçi olduğunu söylemiştik. Dolayısıyla `*array_ptr` dediğimizde ilk öğeyi verdiğini biliyoruz. Bu kısım tamam. Peki `array_ptr += 1;` ne anlama geliyor?

**Pointer**'a 1 eklediğimizde bir sonraki kutunun adresini tutmasını istiyoruz.

Biraz kafalar karışmış olabilir. Bu tarz şeylere görsellik katmadan anlamak zordur bilirim. İkinci elemana ulaşmak için adrese 1 eklediğimizde olacak şey böyledir:

![]({{ site.baseurl }}/assets/img/posts/c-c++-posts/anlayamadiklarimiz-pointer/006.png)

Göreceğimiz gibi 1 eklediğimizde esasen `1*sizeof(int)` demek isteriz. **int** olmasının sebebi dizinin elemanlarının tam sayı olmasıdır. Tam sayı boyutunun 4 bayt olduğundan bahsetmiştik. Yani 4 kutu. 1 eklemek istediğimizde 4 kutu sonraya git demiş oluruz. Yani `sayi_dizisi_ptr` **pointer** değişkeni artık 0x7ffcd4fb6110 adresini depolayacak. Bunu yapma sebebimiz ise diğer elemanın adresine erişmek. Tekrardan 1 eklediğimizde de aynı işlemler uygulanır ve adres 0x7ffcd4fb6114 olur.

Direk olarak 3. elemana erişmek isteseydik `2*sizeof(int)`, yani 2 eleman sonraya git diyebilirdik:

![]({{ site.baseurl }}/assets/img/posts/c-c++-posts/anlayamadiklarimiz-pointer/007.png)

Bu sefer sonraki 8. kutuya giderek 30 değerinin adresine sahip olurdu.

Açıklaması biraz uzun sürmüş olabilir. Ama kafanızda netleşeceğini düşünüyorum. Anlayıp anlamadığınızı bir sorgulayın. Eğer anladıysanız devam, anlamadıysanız editörü açın ve bir takım C/C++ deneyleri yapın.

> Söylememe gerek var mı bilmiyorum ancak pointer'a tekrar atama yaptığımız için adres değişir diyoruz. Yani `sayi_dizisi_ptr += 1;` ifadesi adresi kalıcı olarak değiştirir. Sonraki adresi yazdırmak amacıyla `sayi_dizisi_ptr + 1;` ifadesini kullansaydık adresin değeri değişmezdi. Oradaki `=` kritik öneme sahip.

Son işlemin ardından artık `sayi_dizisi_ptr` sonuncu elemanın adresini tutacaktır:

```cpp
printf("adres: %p\n", sayi_dizisi_ptr);
printf("eleman: %i\n", *sayi_dizisi_ptr);

/* ÇIKTI:
adres: 0x7ffcd4fb6114
eleman: 30
*/
```

Peki tekrardan 2. elemana ulaşmak istersek? Çocuk oyuncağı. Toplama yerine çıkarma yaparak önceki kutulara gideceğiz:

```cpp
sayi_dizisi_ptr -= 1;
printf("adres: %p\n", sayi_dizisi_ptr);
printf("eleman: %i\n", *sayi_dizisi_ptr);

/* ÇIKTI:
adres: 0x7ffcd4fb6110
eleman: 20
*/
```

Artık pointer ile toplama ve çıkarma yapmanın ne anlama geldiğini benimsediğimizi düşünüyorum. Bunu anlamak önemli.


<blockquote style="text-align: center;">
Bu kısımdan bir çıkarım yapacak olursak, dizi tanımlamak için ilk elemanın adresini ve eleman sayısını bilmemizin yeterli olacağını anlayabiliriz. Bunu anladığınızda dizi tanımlamak çok daha kolay hale gelir.
</blockquote>

## İndekslerin Pointer Aritmetiğindeki Karşılıkları

Az önceki kısımda anlattığımız dizi elemanlarını elde etmek işlemini pointerlara girmeden önce indeksler ile kolayca yapabiliyorduk: 

```cpp
printf("ilk eleman: %i\n", sayi_dizisi[0]);
printf("ikinci eleman: %i\n", sayi_dizisi[1]);
printf("son eleman: %i\n", sayi_dizisi[2]);

/* ÇIKTI:
ilk eleman: 10
ikinci eleman: 20
son eleman: 30
*/
```

Ancak bazen pointerlara ihtiyacımız olur. O yüzden indekslere karşılık gelen pointer ifadelerine göz gezdireceğiz. Yukarıdaki kodu indeksler yerine pointer aritmetiği kullanılarak yeniden yazalım

```cpp
// İlk ifade, *(sayi_dizisi) ve 
// *(sayi_dizisi + 0) ile tamamen aynıdır.
printf("ilk eleman: %d\n", *sayi_dizisi); 
printf("ikinci eleman: %d\n", *(sayi_dizisi + 1));
printf("son eleman: %d\n", *(sayi_dizisi + 2));

/* ÇIKTI:
ilk eleman: 10
ikinci eleman: 20
son eleman: 30
*/
```

Ancak bu kısımda dikkat etmemiz gereken bir şey var. Bir dizinin 2. elemanının adresini depolayan bir **pointer** tanımlayalım. Ve indeks 1'deki değere bakalım:

```cpp
int *yeni_sayi_dizisi = &sayi_dizisi[1]; // ya da (sayi_dizisi + 2)
printf("%d", yeni_sayi_dizisi[1])
    
/* ÇIKTI:
30
*/
```

30 sonucunu alırız. Çünkü dizimiz artık şu hale gelecektir:

![]({{ site.baseurl }}/assets/img/posts/c-c++-posts/anlayamadiklarimiz-pointer/008.png)

Dolayısıyla ilk eleman artık 30 olacaktır (başlangıçtan 4 kutu sonrası olarak hayal ediyorduk hatırlayın).

## Fonksiyonlar ile Pointer İlişkisi

Bir fonksiyon içerisinde değişkenlerin değerini değiştirmek istediğimizi düşünelim. Bunun için bir örnek oluşturalım:

```cpp
#include <stdio.h>

int kare_al(int n) { 
   n *= n;
   printf("Fonksiyon içinde sayı: %d\n", n);
   return n;
}
 
int main() {
   int sayi = 12;
   printf("Fonksiyon öncesinde sayı: %d\n", sayi);
   printf("Fonksiyondan return edilen sayı: %d\n", kare_al(sayi));
   printf("Fonksiyon sonrasında sayı: %d\n", sayi);
}

/* ÇIKTI:
Fonksiyon öncesinde sayı: 12
Fonksiyon içinde sayı: 144
Fonksiyondan return edilen sayı: 144
Fonksiyon sonrasında sayı: 12
*/
```

Burada fonksiyona gönderilen `sayi` değişkeninin `n` isminde kopyası oluşturulur ve bellekte yer işgal eder. Yapılan işlemlerin orjinal değişken üzerinde etkisi olmaz. Yeni değer yalnızca `return` ile çağrıldığı yere döndürülebilir. 

Peki ya argümanı alırken pointer kullanırsak ne olurdu?

```cpp
#include <stdio.h>

void kare_al(int *n) {
   *n *= *n; // adresteki sayıyı kendisiyle çarpıyoruz
   printf("Fonksiyon içinde sayı: %d\n", *n)
}
 
int main() {
   int sayi = 12;
   printf("Fonksiyon öncesinde sayı: %d\n", sayi);
   kare_al(&sayi);
   printf("Fonksiyon sonrasında sayı: %d\n", sayi);
}

/* ÇIKTI:
Fonksiyon öncesinde sayı: 12
Fonksiyon içinde sayı: 144
Fonksiyon sonrasında sayı: 144
*/
```

Farkı net bir şekilde görebilirsiniz. Fonksiyona değişkenin adresini gönderdiğimizde yapılan işlemler orjinal değişkeni değiştirir. Adresteki içeriğin karesi alır ve adresin içeriği değiştirilir. Fonksiyon sonrasında o adrese bakacak olursak değiştiğini görürüz.

> Bu özelliğin yararı çok fazladır. Örneğin çok sayıda veri üzerinde çalışıyorsunuz, mesela 100.000 adet resmimiz var. Ve bu resimleri nesne tespitini yapacak fonksiyona göndermek istiyoruz. Ancak **pointer** olmasaydı ve hepsinin kopyasını göndermiş olsaydık, bellekte 200.000 resim depolanmış olurdu. Muazzam bir yer işgali olacaktır ve performans düşecektir. Bu sebeple, sadece adresin içeriğinde değişiklik yapmak faydalıdır. Her yerden orjinal içeriğe erişebiliriz.

Peki dizi göndermek istesek ne olurdu? Dizi isimlerinin pointer olduğundan bahsetmiştik. Diziyi fonksiyona kabul ederken parametre olarak tanımlayabileceğimiz ve temelde aynı olan 2 seçeneğimiz var.

Birincisi dizi olarak almak:

```cpp
int sayilara_5_ekle(int dizi[]) 
```

İkincisi ise pointer olarak almak:

```cpp
int sayilara_5_ekle(int *dizi) // önerilen budur
```

Bunların ikisi de adresler ile işlem yapacağından aynıdır ve orjinal diziyi değiştirirler. Örneğimize bakalım:

```cpp
#include <stdio.h>

void sayilara_5_ekle(int *dizi, int dizi_uzunlugu) {
    for (int i = 0; i < dizi_uzunlugu; ++i) {
       dizi[i] += 5;
    }
}

int main() {
   int sayilar[] = {1,8,3,7,5};
   sayilara_5_ekle(sayilar, 5);

   for(int i = 0; i < 5; i++)
    printf("%d ", sayilar[i]);
}

/* ÇIKTI:
6 13 8 12 10
*/
```

Ancak pointer olarak atamak içeriğini değiştirmek istemediğimiz durumlarda (mesela örnekteki gibi en büyük elemanı bulmak istersek) risk oluşturur. Ya yanlışlıkla değiştirirsek? İstenmeyen veri kayıpları olabilir. Bundan kaçınmak için içeriğin değiştirilemeyeceğini belirten `const` anahtar kelimesini kullanabiliriz:

```cpp
#include <stdio.h>

int en_buyuk_deger_bul(const int *dizi, int dizi_uzunlugu) {
   int en_buyuk_deger = dizi[0];
   for (int i = 1; i < dizi_uzunlugu; ++i) {
      if (en_buyuk_deger < dizi[i])
        en_buyuk_deger = dizi[i];
   }
   return en_buyuk_deger;
}

int main() {
   int sayilar[] = {1,8,3,7,5};
   printf("En büyük sayi: %d", en_buyuk_deger_bul(sayilar, 5));
}

/* ÇIKTI:
En büyük sayi: 8
*/
```

## Matruşka Pointer'lar

Bunu sona bırakmak istedim. Pointer'ın en çok kafa karıştıran kısmıdır. Basitçe anlatmaya çalışacağım.

Bir **pointer** değişkenin adres depoladığını artık biliyoruz. Elbette **pointer** değişkenlerde bellekte depolanır. Bu sebeple **pointer** adresi tutan **pointer** oluşturmak mümkündür.

Bir değişken ve **pointer** oluşturalım:

```cpp
int yas = 21;
int *yas_ptr = &yas;
```

Şimdi bu **pointer**'ın adresini depolayan bir **pointer** daha oluşturalım:

```cpp
int **yas_ptr_ptr = &yas_ptr;
```

Bu da ne, hani tek yıldız ile oluşturuluyordu? Sakin. Hala tek yıldız ile oluşturuluyor. Yukarıda `int **yas_ptr_ptr` ismini `int** yas_ptr_ptr` olarak ifade ederek analize başlayalım.

`int` tipinde `yas` değişkenin adresini bir **pointer**'a atarsak bunun tipinin `int*` olduğunu gördük. Şimdi ise `int*` tipini tutan pointer oluşturmuş oluruz. Yeni değişkenimizin tipi ise `int**` olur. Şimdi biraz daha netleşti değil mi?

Yeni **pointer** ile ilgili birkaç çıktıya bakalım:

```cpp
printf("%p\n", yas_ptr_ptr);
printf("%p\n", *yas_ptr_ptr); 
printf("%d\n", **yas_ptr_ptr);

/* ÇIKTI:
0x7fffd4e80798
0x7fffd4e80794
50
*/
```

İlk satırı biliyoruz `yas_ptr_ptr`in adresini yazdırdı. İkinci satırda ise bu **pointer**'ın değerini, yani `yas_ptr` değişkeninin adresini yazdırdık. Son satırda ise `yas_ptr_ptr` **pointer** değişkeninin adresini depoladığı `yas_ptr` **pointer** değişkeninin adresinin içerisinde bulunan değeri yazdırmış olduk.

Görsel olarak da eklemiş olayım:

![]({{ site.baseurl }}/assets/img/posts/c-c++-posts/anlayamadiklarimiz-pointer/009.png)


## Kaynaklar

[1] <a href="https://boredzo.org/pointers/">https://boredzo.org/pointers/</a><br>
[2] <a href="https://computer.howstuffworks.com/c23.htm">https://computer.howstuffworks.com/c23.htm</a><br>
[3] <a href="https://www3.ntu.edu.sg/home/ehchua/programming/cpp/cp4_PointerReference.html">https://www3.ntu.edu.sg/../cp4_PointerReference.html</a><br>
