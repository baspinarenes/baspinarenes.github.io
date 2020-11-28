---
layout: post
image: assets/img/card-img/python.png
title: "Kuş Bakışı Python"
excerpt: "Bu yazı ile Python üzerinde kuş bakışı tur atabilirsiniz."
toc: true
---

<div class="copyright-alert">
Bu içerik, <a href="https://twitter.com/leandrotk_"><b>Leandro TK</b></a> tarafından yazılmış ve çeşitli platformlarda on binlerce kişiye ulaşmış, bir yazıdan çevrilmiştir ve tarafımca bazı düzenlemeler yapılmıştır. Yazının orjinal haline <a href="https://leandrotk.github.io/2017/09/learning-python-from-zero-to-hero/index.html"><b>buradan</b></a> ulaşabilirsiniz.
</div>

Tek oturuşluk bir okuma ile Python hakkında güzel ve sağlam bir görüşe sahip olmak istemez miydiniz? Böyle bir içeriğin deneyimi olanların tekrar edebilmesi, dile yeni başlayacakların ise ön bilgiye sahip olması açısından güzel olacağını tahmin ediyorum. Bu sebepten, güzel bir yazıya denk gelmişken çevirip sizinle paylaşmak istedim.

Yazacağım çeviri yazılarıyla ilgili bir şeyden bahsetmek istiyorum. Birebir aynısını yazmaktansa içeriği özümseyip iyileştirmeler yaparak paylaşırsam daha faydalı olacağına inanıyorum. Bu sebeple içerik bir miktar farklılık arz ediyor.

<blockquote style="text-align: center;">Tek yazı ile dil öğrenilemeyeceğini, programlama dillerinin de konuştuğumuz<br>dillerde olduğu gibi deneme yanılma süreci gerektirdiğini unutmayın.</blockquote>

Başlamadan önce, yaratıcısı tarafından Python için yapılan tanımı duyalım:

<blockquote style="text-align: center;">"Programcıların yapacakları şeyleri, birkaç satır kod ile ifade edebilmelerine olanak tanıyan ve bunu yaparken de kodun okunabilirliğinden ödün vermeyen üst düzey programlama dili." - Guido van Rossum</blockquote>

Biraz sadeleştirmiş olabilirim :) Hazırsanız başlayalım!

## Değişkenler

Değişken (**variable**), bir değere taktığımız lakaptır. Basit bir mantığa sahiptir. Değerin bellekteki yerini tutar diyince kafanız karışabilir.  Daha fazla bilgi edinmek için ["Değişken Deyince Ne Anlamalı?"](/python/degisken-deyince-ne-anlamali/) isimli yazıma bakabilirsiniz.

<blockquote style="text-align: center;">En yakınızdaki marketin ismini düşünün. Kapısı, içerisi hatta bakkalcının duruş şekli bile kafanızda canlandı değil mi? Market binasını değer, marketin ismine değişken diyebiliriz. İsmini duyduğunuzda kafanızda o marketin binası ve konumu canlanacaktır. Değişken mantığı da buna benzerdir.</blockquote>

Python'da değişken tanımlamak ve değer atamak oldukça kolaydır. Örneğin 1 sayısını `bir` isimli değişkene atayabiliriz (neden böyle bir şey isteyeceğimiz meçhul):

```python
bir = 1
```

Çocuk oyuncağıydı değil mi? Az önce `bir` değişkenine 1 değerini atadık. Artık değeri bu isimle çağırabiliriz. Farklı değerler tutan birkaç örneğe daha bakalım:

```python
# int (tamsayı) değişkenler
iki = 2
bir_sayi = 10000
dogum_tarihim = 1999
karne_ortalamam = 85
```

Tamsayıların yanı sıra **boolean**, **string** ve **float** veri tiplerini de kullanabiliriz:

```python
# boolean (true-false) değişkenler
true_boolean = True
false_boolean = False

# string (metin) değişkenler
takim = "Leandro Tk"

# float (ondalıklı) değişkenler
kitap_fiyati = 15.80
```
## Kod Blokları

Kod blokları, programlama dillerinden aşina olduğumuz bir kavramdır. Python'da iki nokta (:) ve girintiler ile kod bloğu oluşturabiliriz. Örnek üzerinden göstermek akıllıca olacaktır (burada kod araçtır, amacımız kod bloğu kavramını anlamak):

```python
for rakam in range(10): 
    if rakam % 2 == 0:
        print(f"{rakam} rakamı çift.")
    else:
        print(f"{rakam} rakamı tek.")

print("Sayılar tek/çift diye ayrıldı.")
```

Örneğimizde `for` ve sondaki `print` fonksiyonu yani 1. ve 7. satır Python'un ana kod bloğundadır ve girintisi olmayan tüm satırlar bu bloğa dahildir. `if` ve `else` yani 2-6 arası tüm satırlar `for` bloğundadır. `if` ve `else` ise diğer 2 kod bloğumuzdur.

## Koşullu İfadeler

`if` ifadesi (**statement**), koşulun doğru veya yanlış olup olmadığını değerlendirmek için kullanılır. Koşul doğru yani True ise `if` bloğundaki kod çalıştırılır. Örneğin:

```python
if True:
    print("En doğru sensin.")
    
if 2 > 1:
    print("2, 1'den büyüktür.")
    
""" ÇIKTI:
En doğru sensin.
2, 1'den büyüktür.
"""
```

Kullandığımız ilk `if` ifadesinde koşul, karşılaştırma yapmadan direkt True olarak tanımlanmıştır. Karşılaştırma sonuçları da önce True veya False değerlerinden birine indirgenir:

```python
print(2>1)
print(1>2)

""" ÇIKTI:
True
False
"""
```

Sonuç True ise bloktaki kod çalıştırılır. Bunun yanında `if` ifadesindeki sonuç False olduğunda başka bir şey yaptırmak istersek `else` ifadesini kullanabiliriz:

```python
if 1 > 2:
  print("1, 2'den büyüktür.")
else:
  print("1, 2'den büyük değildir.")

""" ÇIKTI:
1, 2'den büyük değildir.
"""
```

Yukarıdaki örnekte aslında bir şeyi sorgularız: "1>2 doğru mu?". Ancak `if` ve `else` arasına `elif` ifadesiyle istediğimiz kadar ekstra koşul sorgusu ekleyebiliriz:

```python
if 1 > 2:
  print("1, 2'den büyüktür.")
elif 2 > 1:
  print("1, 2'den büyük değildir.")
else:
  print("1, 2'ye eşittir.")
```

Artık iki şeyi sorgulamış oluruz: "1>2 doğru mu?". Eğer değilse "2>1 doğru mu?". 

> `if` ve `else` ifadelerinin sadece birer kez kullanılabiliyorken, `elif` ifadesini istediğimiz kadar kullanabiliriz.

## Döngü: Yineleme {#dongu}

Python'da farklı şekillerde yineleme (**iteration**) yapabiliriz. Yineleme işlemini gerçekleştirmek için `while` ve `for` döngülerini kullanabiliriz.

`while` döngüsü, koşul True olduğu sürece bloğun içindeki kodu çalıştırır. Örneğin aşağıdaki kod 1'den 10'a kadar olan sayıları yazdırır:

```python
sayi = 1

while sayi <= 10:
    print(sayi)
    sayi += 1
    
""" ÇIKTI:
1
2
3
4
5
6
7
8
9
10
"""
```

Bu döngüyü kullanabilmek için **döngü koşulu** gereklidir. Önceki örnekte koşulumuz `sayi <= 10`'dir. Başlangıçta True olduğu için, yineleme başlar. Değişkenin değeri 11 olduğunda ise koşul False olur ve yineleme biter.

Daha iyi anlayabilmek için başka bir kod parçasına bakalım:

```python
dongu_kosulu = True

while dongu_kosulu:
    print("Yineleme içinde döngü koşulu: ", dongu_kosulu)
    dongu_kosulu = False

print("Yineleme bittiğinde döngü koşulu: ", dongu_kosulu)

""" ÇIKTI:
Yineleme içinde döngü koşulu:  True
Yineleme sonunda döngü koşulu:  False
"""
```

`for` döngüsü, nesne elemanlarını yineleyebilmemize yardımcı olur. 1'den 10'a kadar yazdırma örneğini `range` nesnesi yardımıyla şu şekilde yazabiliriz:

```python
#1 dahil ancak 11 dahil değil. Kısacası: [1,11)
for sayi in range(1,11):
    print(sayi)
    
""" ÇIKTI:
1
2
3
4
5
6
7
8
9
10
"""
```

`range` nesnesini özel bir sayı listesi olarak düşünebiliriz (esasen **generator** diye geçer). Döngü yardımıyla listedeki sayıların üzerinden tek tek gezeriz.

<blockquote style="text-align: center;">Hangi döngüyü ne zaman kullanacağımıza dair kabaca konuşacak olursak; yineleme sayısı belliyse <b>for</b>, değilse <b>while</b> kullanacağız diyebiliriz.</blockquote>

## List: Koleksiyon {#liste}

Sayılarımızı değişkenlerde sakladık. Peki ya birden fazla sayı saklamak isteseydik? Her birini bir değişkende saklamak yerine daha mantıklı bir yol bulabilir miyiz?

`List` veri tipi, değerleri liste olarak saklamak için kullanılabilen bir koleksiyondur (**collection**). Barındırdığı elemanların tipleri aynı olmak zorunda değildir. Basit bir kullanımına bakalım:

```python
sayi_listem = [1, 2, 3, 4, 5]
```

Sayılarımızı `sayi_listem` değişkenine depoladık. Peki bu listedeki değerleri nasıl elde edeceğiz? Her öğe bir indeks ile belirtilir ve indeksler 0'dan başlar.

<blockquote style="text-align: center;">Birçok dilde olduğu gibi Python'da da saymaya sıfırdan başlanır. Ekstra olarak Python'da negatif indeksler vardır. Baştan olduğu gibi, sondan da -1, -2, .. şeklinde numaralandırılır.</blockquote>

Kuru kuru geçmektense görselleştirelim ve deneyelim:

<img src="{{ site.baseurl }}/assets/img/posts/python-posts/kus-bakisi-python/indexing.png" alt="" style="display: block; margin-left: auto; margin-right: auto;"/>

Harflere erişmek istersek kutuların başını gösteren değerleri girebiliriz:

```python
harfler = ["İ", "N", "D", "E", "K", "S"]
print(harfler[0])   # İ
print(harfler[1])   # N
print(harfler[4])   # K
print(harfler[5])   # S
print(harfler[-1])  # S
print(harfler[-6])  # İ
```

<img src="{{ site.baseurl }}/assets/img/posts/python-posts/kus-bakisi-python/slicing.png" alt="" style="display: block; margin-left: auto; margin-right: auto;"/>

İndekslemeden bahsetmişken dilimlemeden bahsetmemek olmaz. Dilimleme için alacağımız kısmın başını ve sonunu gösteren sayıları alırız ve benzer bir notasyon kullanırız:

```python
harfler = ["İ", "N", "D", "E", "K", "S"]

# Hem pozitif hem de negatif indeksleri kullanabiliriz.
print(harfler[2:5])
print(harfler[-4:-1])

""" ÇIKTI:
['D', 'E', 'K']
['D', 'E', 'K']
"""
```

Neyse konumuza geri dönelim. Harfler yerine amca çocuklarımızın isimlerini saklamak istediğimizi düşünelim. Ortaya şuna benzer bir şeyler çıkacaktır:

```python
amca_cocuklari = [
    "Kemal",
    "Rıza",
    "Ece"
    "Berk",
    "Cahit",
    "Asuman"
]
```

Liste öğelerine indeksler ile bakabileceğimizi öğrendik ancak listeye nasıl öğe ekleyebileceğimizi hala görmedik. Bir listeye değer eklemenin en yaygın yolu `append()` metodudur. Nasıl çalıştığını görelim:

```python
kitap_rafi = []
kitap_rafi.append("Aklından Bir Sayı Tut")
kitap_rafi.append("Doğu Ekspresinde Cinayet")
print(kitap_rafi[0])
print(kitap_rafi[0])
```

Evet polisiye romanlara bayılırım :) Liste veri tipi bu kadar yeterli. Başka bir veri yapısından bahsedelim.

## Dictionary: Anahtar-Değer Veri Yapısı {#sozluk}

Listelerin tamsayılar ile indekslendiğini gördük. Peki ya indeks olarak sayılar yerine başka şeyler kullanmak istersek?

O halde `dictionary` veri yapısı hakkında bilgi edinelim. **key**-**value**  yani anahtar-değer çiftlerinden oluşan koleksiyon çeşididir. Sözdizimi şu şekilde olacaktır:

```python
sozluk_sozdizimi = {
    "anahtar1": "deger1",
    "anahtar2": "deger2",
    "anahtar3": "deger3"
}
```

Anahtar, değeri gösteren indekstir. Sözlükteki değerlere bu indeksler yardımıyla ulaşabiliriz. 

Yazının sahibine ait bilgileri tutan bir sözlük oluşturalım:

```python
yazar_bilgileri = {
    "isim": "Leandro TK",
    "memleket": "Brezilya"
}

print("Yazarın ismi: ", yazar_bilgileri["isim"])
print("Yazarın memleketi: ", yazar_bilgileri["memleket"])

""" ÇIKTI:
Yazarın ismi:  Leandro TK
Yazarın memleketi:  Brezilya
"""
```

`isim` ve `milliyet` özellikleri sözlüğün anahtarlarıdır. Bunları kullanarak yazara ait bilgilere erişebiliriz.

Listelerde olduğu gibi sözlüklere de öğe eklemeyi görelim. Yeni değeri temsil edecek anahtar ismiyle birlikte değeri ekleyebiliriz:

```python
yazar_bilgileri = {
    "isim": "Leandro TK",
    "milliyet": "Brezilyalı"
}

yazar_bilgileri['yas'] = 24

print(yazar_bilgileri)

""" ÇIKTI:
{'isim': 'Leandro TK', 'milliyet': 'Brezilyalı', 'yas': 24}
"""
```

Ekleme yapmanın yanı sıra var olan değerleri değiştirirken de aynı sözdizimini kullanabiliriz. 

## Yineleme: Öğeler Üzerinde Döngü Kurma {#yineleme}

Listeleri yinelemek oldukça basittir. Liste konusunda gördüğümüz örnekten hatırlayabilirsiniz. Yineleme yapmak için Python geliştiricilerinin genel tercihi `for` döngüsü kullanmaktır:

```python
kitap_rafi = [
    "Aklından Bir Sayı Tut",
    "Doğu Ekspresinde Cinayet",
    "Olasılıksız",
    "Yedi Güzel Adam"
]

for kitap in kitap_rafi:
    print(kitap)

""" ÇIKTI:
Aklından Bir Sayı Tut
Doğu Ekspresinde Cinayet
Olasılıksız
Yedi Güzel Adam
"""
```

Bu şekilde tüm değerleri yazdırabiliriz. Python'un nimetleri.

Listelerde direk elemanlara ulaştık, peki sözlüklerde nasıl yineleme yapıyoruz? Sözlüklerde her yinelemede anahtarları elde ederiz. Elbette anahtarları kullanarak da değerlere erişebiliriz:

```python
sozluk = {
    "anahtar1": "deger1",
    "anahtar2": "deger2",
    "anahtar3": "deger3"
}

for anahtar in sozluk:
    print(f"{anahtar} --> {sozluk[anahtar]}")
    
""" ÇIKTI:
anahtar1 --> deger1
anahtar2 --> deger2
anahtar3 --> deger3
"""
```

Eğer ikisini birden elde etmek istersek `items()` sözlük metodunu kullanabiliriz:

```python
for anahtar, deger in sozluk.items():
    print(f"{anahtar} --> {deger}")

""" ÇIKTI:
anahtar1 --> deger1
anahtar2 --> deger2
anahtar3 --> deger3
"""
```

Sözlüğün içeriğini geçici olarak tuttuğumuz parametreleri anahtar ve değer olarak adlandırdık ancak herhangi bir isim de verebilirdik.


## Sınıflar ve Nesneler

Nesneler (**object**), arabalar, köpekler veya bisikletler gibi dünyamızda var olan nesnelerin temsilidir. İki olgudan meydana gelirler: özellik ve davranış.

Arabaların tekerlek sayısı, kapı sayısı ve oturma kapasitesi gibi özellikleri vardır. Ayrıca hızlanma, durma, kalan yakıtı gösterme  gibi bazı eylemler gerçekleştirirler.

Nesneye yönelimli programlamada bunların özel isimleri vardır. Özellikler için öznitelik (**attribute**), davranışlar için metod (**method**) kavramlarını kullanırız.

Sınıf (**class**) ise nesnelerin üretildiği kalıptır. Gerçek dünyada, genellikle aynı türden birçok nesne görürüz. Mesela arabalar. Aynı model arabalar için oluşturulmuş bir kalıp vardır ve üretim için fabrikada bu kalıp kullanılır. Eğer istersek paket yükseltmeleri de gerçekleştirebiliriz. Kısacası nesneleri özelleştirebiliriz.

Örneklerimize başlayalım. Önce bir araba sınıfı oluşturalım:

```python
class Araba: # "Araba" yerine "Araba()"da yazılabilir.
    pass
```

Sınıfları `class` ifadesiyle tanımlarız.

Nesneler ise sınıflardan üretilmiş örneklerdir (**instance**). Bir örnek oluşturalım:

```python
arabam = Araba()
print(arabam)

""" ÇIKTI:
<__main__.Araba instance at 0x7fb1de6c2638>
"""
```

**Araba** sınıfını kullanarak **arabam** nesnesi oluşturduk ancak halihazırda bomboş bir sınıf. **Araba** sınıfımızın basitçe 4 özellik ile ifade edelim: tekerlek sayısı, yakıt tipi, oturma kapasitesi ve maksimum hız. Sınıfı oluştururken tüm bu öznitelikleri belirlememiz gerekir. Boş olan sınıfımızı bu özelliklerle dolduralım:

```python
class Araba:
    # Argümanlar görülebilsin diye alt alta yazacağım.
    def __init__(self, tekerlek_sayisi, yakit_tipi,
                 oturma_kapasitesi, maksimum_hiz):

        self.tekerlek_sayisi = tekerlek_sayisi
        self.yakit_tipi = yakit_tipi
        self.oturma_kapasitesi = oturma_kapasitesi
        self.maksimum_hiz = maksimum_hiz
```

Sınıfa öznitelik tanımlamak için `__init__()` metodunu kullanırız. Buna, yapıcı metod (**constructor**) denir. Yani verdiğimiz öznitelik değerlerine göre nesneyi oluşturur. Oluştururken de `self` anahtar sözcüğünü kullanır. Bu, sınıftan oluşturulan nesneyi tutar ve o nesne ile işlem yapabilmemizi sağlar. Örneğin bir `tesla_model_s` nesnesi oluşturalım:

```python
tesla_model_s = Araba(4, 'elektrikli', 5, 250)
# 4 tekerlek, elektrikli, 5 kişilik, 250 km/saat maksimum hız
```

Tüm öznitelikleri belirledik. Peki ya bu değerlere nasıl erişebiliriz? Bu değerleri bizimle paylaşması için nesneden ricada bulunuruz. Bunu gerçekleştiren fonksiyonlara ise metod (**method**) deriz. Örnek olarak `tekerlek_sayisi` özniteliği için ayarlama ve değeri alma metodları yazalım:

```python
class Araba:
    # Argümanlar görülebilsin diye alt alta yazacağım.
    def __init__(self, tekerlek_sayisi, yakit_tipi,
                 oturma_kapasitesi, maksimum_hiz):
        self.tekerlek_sayisi = tekerlek_sayisi
        self.yakit_tipi = yakit_tipi
        self.oturma_kapasitesi = oturma_kapasitesi
        self.maksimum_hiz = maksimum_hiz

    def get_tekerlek_sayisi(self):
        return self.tekerlek_sayisi
    
    def set_tekerlek_sayisi(self, sayi):
        self.tekerlek_sayisi = sayi
```

**get** ve **set** ile başlayan bu metodlara **getter** ve **setter** denir. Çünkü ilki öznitelik değerini alır, ikincisi ise öznitelik için yeni değer belirler.

Python'da **getter** ve **setter** tanımlamak için ikinci ve daha güzel bir yöntem, `@property` dekoratörünü (**decorator**) kullanmaktırız. Örneğe göz atalım:

```python
class Araba:
    # Argümanlar görülebilsin diye alt alta yazacağım.
    def __init__(self, tekerlek_sayisi, yakit_tipi,
                 oturma_kapasitesi, maksimum_hiz):
        self.tekerlek_sayisi = tekerlek_sayisi
        self.yakit_tipi = yakit_tipi
        self.oturma_kapasitesi = oturma_kapasitesi
        self.maksimum_hiz = maksimum_hiz

    @property
    def tekerlek_sayisi(self):
        return self.tekerlek_sayisi
    
    @tekerlek_sayisi.setter
    def tekerlek_sayisi(self, sayi):
        self.tekerlek_sayisi = sayi
```

Dekoratör ile gerçekleştirdiğimizde, ilk gördüğümüzün aksine, özniteliklere direkt olarak erişebiliriz:

```python
tesla_model_s = Vehicle(4, 'elektrikli', 5, 250)

# getter
print(tesla_model_s.tekerlek_sayisi)  # 4
# setter
tesla_model_s.number_of_wheels = 2    # değeri 2 yapalım
# getter
print(tesla_model_s.tekerlek_sayisi)  # 2 (getter)
```

Bu ilk yöntemden biraz farklılık gösterir. Öznitelik ile çalışıyormuşuz gibi görünse de yaptığımız işlemler arkaplanda ilgili metodu çalıştırır.

<blockquote style="text-align: center;">Burada neden bir metod çalıştırıyoruz ki diye düşünebilirsiniz. <b>getter</b> kullandığımızda değeri çağırırken başka işlemler de gerçekleştirebiliriz, <b>setter</b> kullandığımızda ise atamadan önce kontrol gerçekleştirebiliriz.</blockquote>

Bununla birlikte arabanın çalıştırılması tarzında eylemler için metodları kullanabiliriz:

```python
class Araba:
    # Argümanlar görülebilsin diye alt alta yazacağım.
    def __init__(self, tekerlek_sayisi, yakit_tipi,
                 oturma_kapasitesi, maksimum_hiz):
        self.tekerlek_sayisi = tekerlek_sayisi
        self.yakit_tipi = yakit_tipi
        self.oturma_kapasitesi = oturma_kapasitesi
        self.maksimum_hiz = maksimum_hiz

    def calistir(self):
        print("VRUUUUUUUM")
```

Metodu çağırdığımızda garip "VRUUUUUUUM" yazısı yazdırılır (böyle çalışan araba mı olur arkadaş):

```python
tesla_model_s = Araba(4, 'elektrikli', 5, 250)
tesla_model_s.calistir()

""" ÇIKTI:
VRUUUUUUUM
"""
```

## Encapsulation: Bilgi Gizleme {#kapsulleme}

Türkçeye **kapsülleme**/**sarmalama** olarak geçen **encapsulation**, nesnelerin özniteliklerine ve metodlarına doğrudan erişimi kısıtlayan ve verilerin yanlışlıkla değiştirilmesine mahal vermeyen bir mekanizmadır. Gereksiz ayrıntıları kullanıcıdan saklayarak işleri kolaylaştırır.

Bu mekanizmanıyı gerçekleştiren, erişimin seviyesini belirleyen yapılara **erişim belirleyicileri** (**access modifier**) denir. Üç çeşit vardır:
- public
- private
- protected

<blockquote style="text-align: center;">Python'da erişimi gerçek anlamda kısıtlayamayız. Erişim belirleyicilerini sezgisel olarak kullanırız, nereden erişebileceğimize alt çizgilere göre biz kendimiz karar veririz. Python denetlemez.</blockquote>

### Public

**public**, her yerden erişime açık olduğunu belirtir.

Yapıcı metodumuzun içinde nesne özelliklerini atamak için değişken tanımlamayı görmüştük. Hatırlamak maksadıyla şu örneğe bakalım:

```python
class Kisi:
    def __init__(self, isim, kilo):
        self.isim = isim
        self.kilo = kilo

blog_sahibi = Kisi('Enes', 76) 
blog_sahibi.kilo = 77
print(blog_sahibi.kilo)  # 77
```

Özniteliklerimizin yanında bir de metodlarımız vardı. Bunların da erişim seviyelerini belirleyebiliriz.

```python
class Kisi:
    def __init__(self, isim, kilo):
        self.isim = isim
        self.kilo = kilo
    
    def get_kilo(self):
        return self.kilo
    
    def set_kilo(self, kilo):
        self.kilo = kilo

blog_sahibi = Kisi('Enes', 76)
blog_sahibi.set_kilo(77)
print(blog_sahibi.get_kilo())  # 77
```

Önceki örneklerde gördüğümüz tüm öznitelikler ve metodlar varsayılan olarak **public** olduğundan dolayı ne işe yaradığı anlaşılabilir olmayabilir. Şimdi diğerlerine de bakalım ve aradaki farkı görelim.

### Protected

**protected** ifadesi, tanımlandığı sınıftan ve o sınıftan türetilen alt sınıflardan erişime açık olduğunu belirtir. Erişimi `protected` yapmak için özniteliklerin ve metodların başına bir adet alt çizgi (_) eklenir:

```python
class Kisi:
    def __init__(self, isim, soyisim):
        # public
        self.isim = isim
        # public
        self.soyisim = soyisim

    # public
    def isim_soyisim_goster(self):
        return self._get_isim() + " " + self._get_soyisim()
    # protected
    def _get_isim(self):
        return self.isim
    # protected
    def _get_soyisim(self):
        return self.soyisim
        

blog_yazari = Kisi('Enes', 'Başpınar') 
print(blog_yazari.isim_soyisim_goster())

""" ÇIKTI:
Enes Başpınar
"""
```
 
### Private

**private** ifadesi, yalnızca tanımlandığı sınıftan erişime açık olduğunu belirtir. Erişimi `private` yapmak için öznitelik ve metodların isimlerinin başına iki adet alt çizgi (__) eklenir.

Önceki örneğe bir **private** metod ve degisken ekleyelim:

```python
class Kisi:
    def __init__(self, isim, soyisim, tc_no):
        # public
        self.isim = isim
        # public
        self.soyisim = soyisim
        # private
        self.__tc_no = tc_no
    
    # public
    def isim_soyisim_goster(self):
        return self._get_isim() + " " + self._get_soyisim()
    # protected
    def _get_isim(self):
        return self.isim
    # protected
    def _get_soyisim(self):
        return self.soyisim
    # private
    def __get_tc_no(self):
        return self.tc_no
```

Farklı bir örnek daha verelim ve son konumuza geçelim:

```python
class Kisi:
    def __init__(self, isim, dogum_tarihi):
        self.isim = isim
        self._dogum_tarihi = dogum_tarihi

    def yasi_goster(self):
        return self.__get_yas()

    def __get_yas(self):
        return 2020 - self._dogum_tarihi

tk = Kisi('TK', 1995)
print(tk.yasi_goster())

""" ÇIKTI:
25
"""
```

## Inheritance: Miras Alma {#kalitim}

Annemizden babamızdan bazı özelliklerini miras alırız. Mesela annemizin gözlerini, babamızın ise burnunu almış olabiliriz. 

Nesne yönelimli programlamada ise bu, Türkçeye **kalıtım** olarak geçen **inheritance** kavramına karşılık gelir. Bazı sınıfların davranışları veyahut karakteristik özellikleri aynı olabilir. Örneğin tüm canlılar ses çıkarabilir, dolayısıyla aynı eylemi gerçekleştirebilirler. Ve bir sınıf ortak özelliklerini başka bir sınıftan miras alabilir. Örneğin canlılar ses çıkardığı için insan sınıfı canlı sınıfından bu özelliği miras alır.

Arabalara geri dönelim. Tekerlek sayısı, koltuk kapasitesi ve maksimum hız, arabaların ortak özelliğidir. Elektrikli arabaların ise normal arabaların yanında başka özellikleri vardır. Öncelikle klasik bir arabayı temsil etmek için `Araba` sınıfı oluşturalım:

```python
class Araba:
    # Argümanlar görülebilsin diye alt alta yazacağım.
    def __init__(self, tekerlek_sayisi, oturma_kapasitesi, 
                 maksimum_hiz):
        self.tekerlek_sayisi = tekerlek_sayisi
        self.oturma_kapasitesi = oturma_kapasitesi
        self.maksimum_hiz = maksimum_hiz
```

Araba sınıfından nesne oluşturalım:

```python
arabam = Araba(4, 5, 250)

print(arabam.tekerlek_sayisi)
print(arabam.oturma_kapasitesi)
print(arabam.maksimum_hiz)
```

Şimdi kalıtım gerçekleştirelim. Bir sınıfa başka bir sınıftan miras almak istersek, miras almak istediğimiz sınıfın ismini parametre olarak veririz. Miras alan sınıfa alt sınıf (**child class**), miras alınan sınıfa ise üst sınıf (**parent class**) denir. Örneğimizde, `ElektrikliAraba` sınıfını oluşturacağız. Bu sınıfın Araba sınıfından miras almasını istiyoruz:

```python
class ElektrikliAraba(Araba):
    # Argümanlar görülebilsin diye alt alta yazacağım.
    def __init__(self, tekerlek_sayisi, oturma_kapasitesi,
                 maksimum_hiz, sarj_suresi):
        super().__init__(tekerlek_sayisi,
                         oturma_kapasitesi, maksimum_hiz)
        self.sarj_suresi = sarj_suresi
```

`super()` fonksiyonu, miras alınan sınıfı temsil eder.  Yani `super().__init__()`, üst sınıfın yapıcı metodunu çağırır. Alt sınıfa ekstra kod eklemeden üst sınıfa ait yapıcı metod çalıştırılmış olunur. Yukarıdaki örneğe eş değer olarak bu kod verilebilir:

```python
# Argümanlar görülebilsin diye alt alta yazacağım.
def __init__(self, tekerlek_sayisi, oturma_kapasitesi,
             maksimum_hiz, sarj_suresi):
    self.tekerlek_sayisi = tekerlek_sayisi
    self.oturma_kapasitesi = oturma_kapasitesi
    self.maksimum_hiz = maksimum_hiz
    self.sarz_suresi = sarz_suresi
```

Bu kadar basit. Başka bir şey yapmamıza gerek yok. Şimdi bir örneğini oluşturalım:

```python
elektrikli_arabam = ElektrikliAraba(4, 5, 250, 50)
print(elektrikli_arabam.tekerlek_sayisi)     # 4
print(elektrikli_arabam.oturma_kapasitesi)   # 5
print(elektrikli_arabam.maksimum_hiz)        # 250
print(elektrikli_arabam.sarj_suresi)         # 50
```

Gördüğümüz gibi `ElektrikliAraba` sınıfında yalnızca `sarj_suresi` özniteliğini atamış olmamıza rağmen kalıtım sayesinde `Araba` sınıfında olan öznitelikleri de kullanabiliyoruz.