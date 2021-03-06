---
layout: post
title: Değişken Deyince Ne Anlamalı?
excerpt: "İkinci çeviri yazım ile karşınızdayım. Yazının orjinali, Ned Batchelder tarafından PyCon 2015 için hazırlanmış bir slaytın yine kendisi tarafından yazıya aktarılmış halidir. Dile yeni başlayan insanların kafasını karıştıran bir nokta olduğunu düşündüğümden dolayı yazıyı herkesin okuyabilmesini istedim."
tag: [variable, name-value, dynamic typing]
---

<div class="warning">
<p>
Bu içerik, kendisine çeviri talebinde bulunduğum ve mailimi oldukça nazik bir şekilde yanıtlayan <a class="warning-link" href="https://twitter.com/nedbat"><strong>Ned Batchelder</strong></a>'in sitesinde paylaştığı yazıdan çevrilmiş ve tarafımca bazı eklemeler yapılmıştır. Yazının orjinal haline <a class="warning-link" href="https://nedbatchelder.com/text/names.html"><strong>buradan</strong></a> ulaşabilirsiniz.
</p>
</div>


İkinci çeviri yazım ile karşınızdayım. Yazının orjinali, Ned Batchelder tarafından PyCon 2015 için hazırlanmış bir slaytın yine kendisi tarafından yazıya aktarılmış halidir. Dile yeni başlayan insanların kafasını karıştıran bir nokta olduğunu düşündüğümden dolayı yazıyı herkesin okuyabilmesini istedim.

Python'daki isimlerin ve değerlerin davranışı, özellikle başka diller ile uğraşmış olanlar için bir miktar kafa karıştırıcı olabilir. Aslında temelinde çok basit bir mantık yatıyor. Gelin kafamızı kurcalayan şeyleri netleştirelim!

> Python'daki **name** ve **value** kavramlarından bolca bahsedeceğiz. Bunların yerine sırasıyla *isim* ve *değer* olarak kullanacağız. Literatürdeki karşılıklarını anlayabilmek için bunu belirtelim.<br><br> Yazının orjinaline bağlı kalarak isim kavramını kullanıyor olacağız ancak *referans*, *isim* ve *değişken* kavramları kabaca aynı şeyi ifade ederler.

## İsimler ve Değerler {#isimler-ve-degerler}

Basitçe başlayalım:<br>

> İsimler, değerlere referans gösterirler.

Birçok programlama dilinde olduğu gibi atama (**assigment**) ifadesi, sol taraftaki sembolik ismi, sağ taraftaki değer ile ilişkilendirir. Yani Python'da isimlerin değerlere referans gösterdiğini veya ismin bir değer için referans olduğunu söyleriz.

```python
x = 23
```
Artık x ismi, 23 değerinin referansıdır. Kullandığımızda 23 değerini elde ederiz:

```python
print(x+2) # 25 yazdırır
```

C dili konusunda deneyimliyseniz, referans kavramını işaretçi (*pointer*) olarak düşünmek isteyebilirsiniz, ancak bu sizin için bir şey ifade etmiyorsa endişe etmeyin. Neler olduğunu anlamanıza yardımcı olması için diyagramlar kullanacağız. Gri etiket, ok ile işaret edilen değerin referansı olan ismi temsil eder. Örnekte x ismi 23 sayısına referans gösterir:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/001.png" alt="001.png" style="width: 180px;"/>

Bu yazıda kodlarımızı diyagramlar ile görselleştireceğiz. Siz de kendi kodlarınızı diyagram şeması ile takip edebilmek için [http://pythontutor.com/](http://pythontutor.com/) sitesini kullanabilirsiniz.

> 
Bir değere birden fazla referans tanımlanabilir.


Bir değerin referans olarak tek bir isme sahip olabileceğini düşünmek hatalıdır. Atama ifadesi, başka isimlerin de aynı değere referans göstermelerini sağlayabilir:

```python
x = 23
y = x
```

Artık x ve y aynı değere işaret ederler:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/002.png" alt="002.png" style="width: 180px;"/>

Belirtmekte fayda var. Ne x ne de y isimlerinden birisi gerçek diğeri ise ikinci isim değildir. İkiside değer için aynı öneme sahiptir. Zaten referans gösterme şekilleri de tamamen aynıdır.

> 
İsim atamaları, diğer isimlerden bağımsız olarak yapılır.


İki isim aynı değere işaret ediyorsa bu iki ismi birbirine bağlamaz. Birine yeniden atama yapmak, diğerinin de yeniden atanmasına neden olmaz:

```python
x = 23
y = x
x = 12
```

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/003.png" alt="002.png" style="width: 180px;"/>

`y = x` dediğimizde, sonsuza dek eşit olacaklar demiş olmayız. x'in yeniden atanması, değerin referansı olarak y'yi yalnız bırakır. Her zaman eşit olsalardı yaşanacak kaosu hayal edebilirsiniz.

> 
Değerler, referansları olduğu sürece yaşarlar.


Staja veya işe girerken de böyle değil midir? Öhöm, öhöm. Goygoyu bırakıp yazımıza geri dönelim :)

Python, her bir değerin kaç tane referansa sahip olduğunu takip eder ve referansı olmayanları otomatik olarak temizler. Buna **garbage collection** denir ve artık ihtiyaç kalmadığında değerlerin kendiliğinden yok olduğu anlamına gelir. Bu temizleme işlemine **reclaiming** de denir.

### Küçük Bir Dokunuş {#kucuk-bir-dokunus-1}

> Aşağıdaki kodları konsoldaki Python yorumlayıcısında çalıştırmak ve script olarak çalıştırmak farklı sonuçlar üretir. Ancak scriptte verdiği sonuçları göz önüne alacağız. Ne de olsa bizim için önemli olan script, değil mi? :)

Python'un yerleşik `id()` fonksiyonunu daha önce duymayanlar olabilir, kısaca değinelim. Argüman olarak verdiğimiz nesnenin kimliğini, yani bellekteki adresini döndürür. Python'daki her şeyin nesne olduğunu, her nesnenin de bir kimliğe sahip olduğunu unutmayın.

Oluşturduğumuz her değişken, bahsettiğimiz gibi değerimizin bellekte bulunduğu konumu tutar. Ve program çalıştığı sürece sabittir ve diğer nesnelerin kimliğinden benzersizdir. Bellekte tutulma biçimini düşünürken her bir değerin yalnızca tek bir adreste tutulacağını düşünmüş olabilirsiniz ancak birden fazla konumda aynı değer bulunabilir:

```python
a = 3000
b = 3000
c = 3000

print(id(3000)) # 140206065524176
print(id(a))    # 140206065524176
print(id(b))    # 140206065524176
print(id(c))    # 140206065524176
```

Tüm isimler farklı nesneye referans gösterir. Ancak önceki örneklerde gösterdiğimiz gibi ismimimizi bir isme atarsak yine aynı konumdaki değeri gösterirler:

```python
a = 3000
b = a
c = a

print(id(3000)) # 140056999120528
print(id(a))    # 140056999120528
print(id(b))    # 140056999120528
print(id(c))    # 140056999120528
```

Analiz edecek olursak; a ismi 3000 değerine referans gösterir (a->3000). b ve c isimleri a ismine, a ismi de 3000 değerini işaret ettiğinden b ve c isimleri de aslında 3000 değerine referans gösterir (b->a->3000, c->a->3000). 

## Atama İşlemi {#atama-islemi}

Atama ile ilgili önemli bir noktanın üzerinde duralım:

> 
Atama yaparken veri kopyalanmaz.


Değerler birden fazla isme sahipse kafanızın karışması ve iki isme ve iki değere sahip olduğumuzu düşünmeniz olasıdır:

```python
x = 23
y = x
# "Şuan iki değerim var: x ve y!" diye düşünebilirsiniz.
# Ancak yanılırsınız: iki isminiz ve sadece bir değeriniz var.
```

Bir isme değer atamak veriyi kopyalamaz veya yeni bir değer oluşturmaz. Atama işlemi, soldaki ismin sağdaki değere referans göstermesini sağlar. Bu durumda, elimizde sadece bir adet 23 değeri bulunur. x ve y isimleri de bu değere referans gösterir.

Listeler gibi biraz daha komplike değerlere sahip olduğumuzda işler daha ilginç hale gelir:

```python
nums = [1, 2, 3]
```

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/004.png" alt="004.png" style="width: 180px;"/>

nums'ı tanımladıktan sonra başka bir isme atarsak, aynı listeye referans gösteren iki tane isme sahibiz demektir:

```python
nums = [1, 2, 3]
tri = nums
```

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/005.png" alt="005.png" style="width: 180px;"/>

> Unutmayın: atama kesinlikle yeni değerler oluşturmaz veya veriyi kopyalamaz. Son örnekteki atama ifadesi, listeyi çiftlemez.

Yazdığımız son kod parçasıyla birlikte, elimizde iki isim ile referans gösterilen bir liste olmuş olur. Ve bu büyük bir şaşkınlığa yol açabilecek bir duruma sebebiyet verir: değiştirilebilirlik. 

Değerler türlerine göre iki kategoriye ayrılır: **mutable** (değiştirilebilir) veya **immutable** (değiştirilemez). Immutable değerler sayılar, string'ler ve tuple'lardır. Diğer hemen hemen her nesne (list, dict, kullanıcıların tanımladığı nesneler gibi) mutable'dır. Mutable, değerin yerinde değiştirebilen (**in-place**) metodlara sahip olduğu anlamına gelir. Immutable, değerin hiçbir zaman değiştirilemeyeceği anlamına gelir, değiştirdiğinizi düşündürecek bir şey yaptığınızda, aslında eski değerlerden yeni değerler yaratıyorsunuz demektir.

Sayılar immutable olduğunda, yerinde değişiklik yapamazsınız, yalnızca yeni bir değer oluşturup aynı isme yeniden atayabilirsiniz:

```python
x = 1
x = x + 1
```

Burada, `x+1` tamamen yeni bir değer hesaplar ve sonrasında bu değer x'e atanır. mutable bir değeri ise genellikle değerin metodlarıyla değiştirebilirsiniz:

```python
nums = [1, 2, 3]
nums.append(4)
```

Öncelikle listemize bir isim atayalım:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/006.png" alt="006.png" style="width: 180px;"/>

Ardından bu listeye başka bir değer ekleyelim:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/007.png" alt="007.png" style="width: 180px;"/>

nums'ın referans gösterdiği değeri değiştirmedik. Başlangıçta, nums ismi üç elemanlı bir listeyi ifade eder. Sonrasında listeye erişmek için aynı ismi kullanmaya devam ederiz, çünkü başka atama yapmadığımızdan dolayı aynı listeye referans göstermeye devam eder. `append` metodu, 4 değerini ekleyerek listeyi değiştirir, ancak liste hala aynı listedir ve nums hala onun referansıdır.

`x = x + 1` ifadesinin x ismini değiştirdiğini, `nums.append(4)` kod parçasının ise nums'ı değiştirdiğini söyleyebiliriz, ancak bunlar çok farklı değişikliklerdir. Birincisi, x ismini yeni bir değere bağlar, ikincisi ise nums isminin ifade ettiği değeri değiştirir.

İnsanların tam olarak bu noktada kafası karışır: iki isim aynı değeri temsil ediyorsa ve değer değişmiş ise her iki isimde değişikliği görür. Tabi bunun değiştirilebilir nesnelerde geçerli olduğuna dikkat edin, değiştirilemez nesnelerde bu durum zaten yaşanamaz. 

```python
nums = [1, 2, 3]
tri = nums
nums.append(4)

print(tri)      # [1, 2, 3, 4]
```

tri'nin değeri neden değişti? Cevap, şimdiye kadar öğrendiklerimizde gizlidir. Atama yapmak, değeri kopyalamaz. Bu nedenle tri ismine atama yaptıktan sonra, aynı listeye referans olan iki ismimiz olur:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/008.png" alt="008.png" style="width: 180px;"/>

Sonrasında listeyi yerinde değiştiren `nums.append(4)` metodunu çağırırız. tri bu listeyi temsil ettiğinden, baktığımızda değişikliği görürüz. Bu nedenle ismimiz artık dört elemanlı olan listeyi gösterir:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/009.png" alt="009.png" style="width: 180px;"/>

Değiştirilebilirlik, insanların Python isimleri ve değerleriyle ilgili kafasını karıştıran asıl şeydir. Bir değer birden fazla isim tarafından paylaşılır ve birinde değiştirilir ise tüm isimler değişikliği görür. Bunun gerçekleşmesi için ihtiyacımız olanlar ise:

- Değiştirilebilir bir değer alınır, örneğimizde liste,
- Değere referans gösteren birden fazla isim oluşturulur,
- Değerin isimlerinden birinde değişiklik yapılır ve
- Diğer isimler değişikliği görür.

Bu bir hata değildir, bazı durumlarda bu şekilde çalışmasını isteyebiliriz. Programınızın belirli noktalarında birçok değerin birden fazla ismi bulunabilir ve birinde değer değiştirildiğinde tüm isimlerin değişikliği görmesi kesinlikle faydalıdır. Alternatifi ise, değerleri kopyalayarak atama yapmak olabilir ancak bu programlarınızı dayanılmaz derecede yavaşlatır.

> 
Python'da mutable ve immutable değerlerin atamaları farklı şekilde yapılır düşüncesi yanlıştır.


Bu durum yalnızca mutable değerlerde gerçekleştiğinden, bazı insanlar atamanın mutable değerler için farklı şekilde gerçekleştiğine inanır. Ancak durum böyle değildir.

Tüm atamalar aynı şekilde çalışır: bir isim bir değere referans atanır. Ancak immutable bir değer, referans gösteren kaç isim olursa olsun, yerinde değiştirilemez. Böylece diğer isimler bu değişiklikten asla etkilenmez.

### Küçük Bir Dokunuş {#kucuk-bir-dokunus-2}

Python'da mutable değere sahip bir isim oluşturulduğunda, bellekte o değer için her atamada farklı nesne oluşturulur. immutable değerlerde ise hep aynı nesneyi kullanır.

Önce mutable bir değer üzerinde görelim:

```python
# önce [1,2,3] list değerimizin bellekteki yerine bakalım
print(id([1,2,3])) # 139919477881216

# başlangıçta referansı olmayan bir değere referans olarak
# bir isim atarsak, değerin bellek adresi isme atanır.
# dolayısıyla onun kimliğini alır. ardından bellekte o 
# değerin yerini bir daha sorgularsak yeni nesne
# oluşturulduğunu görürüz. henüz referansı yoktur.
b = [1,2,3]
print(id(b))       # 139919477881216
print(id([1,2,3])) # 139919478770176

# c = [1,2,3] dediğimizde yine referansı olmayan nesneye
# "c" isimli bir referans atamış oluruz. kabaca söyleyecek
# olursak; mutable değerleri atadığımızda bellekte
# aynı değere sahip referanssız yeni bir nesne oluşturulur.
c = [1,2,3]
print(id(c))       # 139919478770176
print(id([1,2,3])) # 139919477962432
```

Öte yandan immutable değerlerde denersek yeni nesne oluşturulmadığını görürüz:

```python
# önce (1,2,3) tuple değerimizin bellekteki yerine bakalım
print(id((1,2,3)))     # 140221554746528

# referansı olmayan bu değere bir isim atadığımızda
# yine aynı adresi işaret ettiğini farkederiz.
b = (1,2,3)
print(id(b))           # 140221554746528
print(id((1,2,3)))     # 140221554746528

# başka bir atamada yine sonuç değişmez. bunun sebebi
# değerin immutable yani değiştirilemez olmasıdır.
c = (1,2,3)
print(id(c))           # 140221554746528
print(id((1,2,3)))     # 140221554746528
```

Zaten mantıklı düşünecek olursak, değeri değiştirilmeyen bir nesne için birden fazla yer işgal etmenin bir anlamı olmazdı.

İsimlere değer atadığımızda olacakları gördük. Bir isme yine bir isim atarsak ve değerlerini değiştirecek olursak mutable ve immutable olmaları nasıl bir etki yaratır?

```python
x = 1

# atadığımız değerin kimliğine göz atalım
print(id(x))     # 94543789522240

# sonrasında ise x'e atanacak olan x+1'in kimliğine bakalım
print(id(x+1))   # 94543789522272

# yukarıda atama işlemi yapmadan göz atmıştık. şimdi atamayı
# yapalım ve x'in kimliğine tekrar bakalım
x = x + 1  
print(id(x))     # 94543789522272

# x = 1 yerine koyarsak x + 1'in 2 olacağından ona da bakalım
print(id(2))     # 94543789522272
```
Göreceğiniz üzere üç ifade de aynı sonucu verdi. Çünkü her işlemde elimizdeki değer 2 olacaktır. 2 değeri integer olduğundan, integer veriler de immutable olduğundan dolayı verdiğimiz referansların hepsi aynı bellek adresini işaret ederler.

Bir liste üzerinde değişiklik yaparak mutable nesnelerin vereceği tepkiyi görelim:

```python
nums = [1, 2, 3]

# işlem yapmadan önce listeyi atadığımız "nums" isminin
# kimliğine bakalım.
print(id(nums))   # 139622030879296

# aynı listeye "nums" ismini kullanarak "tri" isimli yeni bir
# referans atayalım.
tri = nums

# "tri" ismimizin bellekte tuttuğu adrese bakalım ve nums'ın
# değerini konumunda değiştiren liste fonksiyonları ile
# değiştirelim.
nums.append(4)

# son olarak "nums" isminin değerini değiştirdikten sonra
# "nums" ve "tri" isimlerinin bellek adreslerini kontrol edelim.
print(id(nums))   # 139622030879296
print(id(tri))    # 139622030879296
```

tri ismine nums ismini atadığımız için, ikisinin de bellekte aynı adresi işaret etmesini bekleriz. Sonrasında **ATAMA YAPMAMAK ŞARTIYLA**, listede değişiklik yaptığımızda ise yine aynı konumu gösterdiğini görebiliriz.

> Basit bir örnekle bunu hayal edelim: Bir kovam var ve içi yarıya kadar su dolu. Geri kalan yarısını doldurursak kova hala aynı konumda olacaktır. Ancak içindeki su miktarı değişmiştir.

## Python Dilinin Çeşitliliği {#python-dilinin-cesitliligi}

Daha önce Python'un altında yatan basitlikten bahsetmiştik. Mekanizmaları oldukça basittir ancak çeşitli şekillerde ortaya çıkarlar.

> 
Referans, sadece isimden ibaret değildir.


Şimdiye kadar kullandığımız tüm örneklerde, referans olarak isimler kullanıldı. Ancak başka şeyler de referans olabilir. Python, her elemanı bir değer için referans tutan bir dizi bileşik veri yapısına sahiptir: liste öğeleri, sözlük anahtarları ve değerleri, nesne öznitelikleri vs. Bunların her biri bir atama ifadesinin sol tarafında kullanılabilir ve isimler için bahsettiğimiz şeyler onlar için de geçerlidir. Atama ifadesinin sol tarafında görülebilecek her şey referanstır ve "isim" dediğimiz her yere "referans" kelimesini rahatlıkla koyabilirsiniz.

Liste diyagramlarımızda, eleman olarak sayıları göstermiştik ancak gerçekte her öğe bir sayıya referanstır. Bu nedenle şu şekilde çizilmelidir:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/010.png" alt="010.png" style="width: 180px;"/>

Ancak diyagram karmaşıklaşacağı için görsel bir kısaltma kullandık:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/011.png" alt="010.png" style="width: 180px;"/>

mutable değerleri işaret eden liste öğeleriniz varsa, liste elemanlarının yalnızca değerlere referanslar olduğunu unutmamak önemlidir.

İşte diğer bazı atamalar. Soldakilerin her biri, birer referanstır:

```python
my_obj.attr = 23
my_dict[key] = 24
my_list[index] = 25
my_obj.attr[key][index].attr = "etc, etc"
```

Bunun gibi bir çok örnek verebiliriz. Pek çok Python veri yapısı değerler tutar ve bunların hepsi birer referanstır. İsimlerde bahsettiğimiz tüm kurallar, bu referanslara da tamamen aynı şekilde uygulanır. Örneğin, **garbage collector** yalnızca isimleri saymaz, bir değerin ne zaman **reclaimed** olacağına karar vermek için her türlü referansı sayar.

`i = x` atamasının **i** ismine yapıldığını, ancak `i[0] = x` atamasının **i** değerinin ilk öğesine yapıldığına dikkat edin. Tam olarak neye atandığını ayırt edebilmek önemlidir.

> 
Kodlarımızda kullandığımız çoğu şey, atama ifadeleridir.


Pek çok şeyin referans görevi görebileceği gibi Python'da atama işlemi olan birçok ifade vardır. Aşağıdaki satırların her biri, x ismine yapılan atamalardır:

```python
X = ...
for X in ...
[... for X in ...]
(... for X in ...)
{... for X in ...}
class X(...):
def X(...):
def fn(X): ... ; fn(12)
with ... as X:
except ... as X:
import X
from ... import X
import ... as X
from ... import ... as X
```

Bu ifadelerin atama gibi davrandığını söylemiyoruz. Aksine bunların hepsi, birer atamadır: hepsinde x ismi bir değere referans gösterir ve atamalar hakkında söylediklerimizin hepsi geçerlidir.

Bu ifadeler çoğunlukla x'i ifadenin çağırıldığı yer ile aynı kapsamda tanımlar, elbette **list comprehension** gibi bazı istisnalar hariç. Ancak bunların hepsi gerçek atamalardır ve atama ile ilgili her şey geçerlidir.

> 
Python, fonksiyon argümanlarını ilgili isimlere atayarak gönderir.


Gelin atama çeşitlerinin en ilginç olanını inceleyelim: fonksiyon çağrısı. Bir fonksiyonu tanımladığımızda, parametrelerini şöyle adlandırırız:

```python
def my_func(x, y):
    return x+y
```

Burada x ve y, my_func fonksiyonunun parametreleridir. my_func'ı çağırdığımızda, fonksiyonların argümanları olarak kullanılacak değerleri göndeririz. Bu değerler, tıpkı bir atama ifadesi kullanılmış gibi parametre isimlerine atanır:

```python
def my_func(x, y)
    return x+y

print(my_func(8, 9))
```

Yani my_func fonksiyonunu çağrıldığında, x ismine 8 ve y ismine 9 atanır. Bu atama, bahsettiğimiz basit atama ifadeleriyle tamamen aynı şekilde çalışır. x ve y isimleri, fonksiyon için yereldir. Dolayısıyla fonksiyon değer döndürdüğünde bu isimler kaybolur. Ancak referans gösterdikleri değerlerin başka referansları varsa, değerler yaşamlarına devam ederler.

Diğer tüm atamalarda olduğu gibi mutable değerler fonksiyonlara aktarıldığında değerdeki değişiklikler tüm referanslarda görülür:

```python
def augment_twice(a_list, val):
    a_list.append(val)
    a_list.append(val)

nums = [1, 2, 3]
augment_twice(nums, 4)
print(nums)  # [1, 2, 3, 4, 4]
```

Bu kod parçası şaşırtıcı sonuçlar doğurabilir. Adım adım ilerleyerek süreci takip edelim. augment_twice fonksiyonunu çağırdığımızda isimler ve değerler şöyle görünür:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/012.png" alt="010.png" style="width: 180px;"/>

Fonksiyondaki yerel isimleri bir çerçeve içine aldık. Fonksiyonu çağırdığımızda, diğer herhangi bir atama ifadesinde olduğu gibi değerler parametre isimlerine atanır. Atamanın hiçbir zaman yeni değerler oluşturmadığını veya herhangi bir veriyi kopyalamadığını unutmayın. Bundan dolayı yerel isim a_list, gönderilen değere yani nums'a referansta bulunur.

Sonra `a_list.append` metodunu iki kez çağırarak listeyi değiştiririz:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/013.png" alt="010.png" style="width: 180px;"/>

Fonksiyon sona erdiğinde yerel isimler yok edilir. Referansı kalmayan değerler **reclaimed** duruma gelir, diğerleriyse bellekte kalır:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/014.png" alt="010.png" style="width: 180px;"/>

Değiştirmek üzere listeyi fonksiyonumuza gönderdik. Hiçbir değer kopyalanmadı. Bu davranış şaşırtıcı olsa da oldukça önemlidir. Bu sayede nesneleri değiştiren yöntemler yazabiliriz.

Yukarıdaki fonksiyonu yazmanın başka bir yolu da budur, ancak düzgün çalışmaz. Nedenine bakalım:

```python
def augment_twice_bad(a_list, val):
    a_list = a_list + [val, val]

nums = [1, 2, 3]
augment_twice_bad(nums, 4)
print(nums)  # [1, 2, 3, 4, 4]
```
augment_twice_bad fonksiyonunu çağırdığımız anda, daha önce augment_twice fonksiyonunu çağırdığımızdakiyle aynı görüntüyü elde ederiz:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/015.png" alt="010.png" style="width: 180px;"/>

Bir sonraki ifade ise atama işlemidir. Sağ taraftaki ifade yeni bir liste oluşturur ve bu liste daha sonra a_list ismine atanır:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/016.png" alt="010.png" style="width: 180px;"/>

Fonksiyon sona erdiğinde, yerel isimler yok edilir ve referansı kalmayan değerler çöpe gönderilir ve başladığımız yere döneriz:

<img src="/assets/img/posts/python/degisken-deyince-ne-anlamali/017.png" alt="010.png" style="width: 180px;"/>

Bir değeri yerinde değiştirmek ile bir ismi yeniden tanımlamak arasındaki farkı anlayabilmek gerçekten önemlidir. augment_twice fonksiyonu gönderilen değeri değiştirdi ve böylece fonksiyon değer döndürdükten sonra da değişim görüldü. augment_twice_bad fonksiyonu ise gönderilen değeri yerel bir ismi yeniden tanımlamak için atama kullandı, bu nedenle değişiklikler fonksiyonun dışında görülmedi.

Fonksiyonumuz için başka bir seçenek de yeni bir değer oluşturmak ve değeri döndürmektir:

```python
def augment_twice_good(a_list, val):
    a_list = a_list + [val, val]
    return a_list

nums = [1, 2, 3]
nums = augment_twice_good(nums, 4)
print(nums)         # [1, 2, 3, 4, 4]
```

Burada, augment_twice_good fonksiyonu içerisinde tamamen yeni bir değer oluştururuz ve döndürdürürüz. Fonksiyonu çağırırken bu değeri korumak için bir atama kullanırız ve istediğimiz etkiyi elde ederiz.

Son fonksiyon, beklenmeyen sonuç elde etme olasılığını en aza indirdiği için belki de en iyisidir. Yerinde bir değeri değiştirmeyip, yeni değerler yaratarak süprizlerden sıyrılır.

Yeniden tanımlama ve değişiklik yapmak arasındaki seçimin mutlak doğru bir cevabı yoktur: hangisini kullanacağınız, ihtiyacınız olan etkiye bağlıdır. Önemli olan, her birinin nasıl davrandığını anlamak, elinizde hangi araçlara sahip olduğunuzu bilmek ve daha sonra o an için en iyi olanı seçmektir.

## Dinamik Tip Belirleme {#dinamik-tip-belirleme}

Python'daki isimler ve değerler hakkında bazı ayrıntılardan bahsedelim:

> 
Herhangi bir isim, herhangi bir anda herhangi bir değere referans olabilir.


Python dinamik olarak yazılmıştır, yani isimlerin tipi yoktur. Tanımlanan bir isim başlangıçta bir tamsayıya, ardından bir listeye, sonrasında bir fonksiyona ve daha sonra ise bir modüle referans olabilir. Tabii ki, bu çok kafa karıştırıcı olacaktır. Bu yüzden bunu yapmaktan kaçınmalıyız. Ama Python'un umrunda olmaz.

> 
İsimlerin tipi yoktur, değerlerin kapsamı yoktur.


İsimlerin tipi olmadığı gibi değerlerin de kapsamı yoktur. Bir fonksiyonun yerel değişkeni olduğunu söylediğimizde, ismin kapsamının fonksiyona göre ayarlandığını kastederiz; fonksiyonun dışında ismi kullanamazsınız ve fonksiyon değer döndürdüğünde isim yok edilir. Ancak gördüğümüz gibi değerin başka referansları varsa, fonksiyon çağrısının ötesinde yaşayacaktır. Yerel olan değer değil isimdir.

> 
Değerler silinemez, yalnızca isimler silinebilir.


Python'un bellek yönetimi davranışının merkezinde yer alır, değerleri silmenin bir yolu yoktur. Belki bir yerlerde `del` ifadesine denk gelmiş olabilirsiniz:

```python
nums = [1, 2, 3]
del nums
```

Bu, nums'ın değerini silmez, nums ismini siler. İsim uzayından çıkarılır ve ardından olağan referans sayımı devreye girer: nums isminin referans gösterdiği değerin başka referansı yoksa, değer **reclaimed** duruma gelir. Ancak başka referansları varsa, o zaman yaşamaya devam eder.

> "Python'da değişken yoktur" yargısı yanlıştır.


Bazı insanlar "Python'da değişken yoktur, isimler vardır" demeyi severler. Ancak bu slogan yanıltıcıdır. Gerçek şu ki, Python'da değişkenler vardır fakat C'deki değişkenlerden farklı çalışırlar. 

İsimler, Python değişkenleridir: değerlere referans olurlar ve bu değerler programınız süresince değişebilir. Sırf başka bir dilin (önemli olsa da) farklı davranması, Python'u değişken içermeyen dil olarak tanımlamak için iyi bir neden değildir.

Yazımız burada bitti. Yeni yazılarda görüşmek üzere, esen kalın.