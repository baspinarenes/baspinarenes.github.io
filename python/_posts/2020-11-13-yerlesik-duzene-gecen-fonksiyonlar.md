---
layout: post
image: assets/img/card-img/python.png
title: Yerleşik Düzene Geçen Fonksiyonlar
scrool-top: true
excerpt: "Python'da son derece fazla kullanılan yerleşik fonksiyonlar için başucu kaynağı."
---

Python'da fazlaca kullanılan yerleşik fonksiyonlar için bir başucu yazımın olmasını istedim. Böylece hem ben hem de siz arada bir gelip burdan yardım alabiliriz. Yazıyı güzel örneklere denk geldikçe zenginleştirmeyi düşünüyorum. Eğer güzel örnekleriniz ve ekleyeceğiniz bilgileriniz varsa bana mesaj ile iletirseniz ekleyebilirim.<br><br>

<!-- https://www.tablesgenerator.com/ sitesinden üretildi.-->
<div class="table-responsive"> 
    <style type="text/css">
    .tg  {border-collapse:collapse;border-color:#ccc;border-spacing:0;}
    .tg td{background-color:#fff;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
    font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg th{background-color:#f0f0f0;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
    font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
    .tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}
    </style>
    <table class="tg table">
    <thead>
    <tr>
        <th class="tg-amwm" colspan="7">Yerleşik Fonksiyonların Önemlileri</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="tg-c3ow"><a href="#abs">abs()</a></td>
        <td class="tg-c3ow"><a href="#all">all()</a></td>
        <td class="tg-c3ow"><a href="#any">any()</a></td>
        <td class="tg-c3ow"><a href="#bin">bin()</a></td>
        <td class="tg-c3ow"><a href="#bool">bool()</a></td>
        <td class="tg-c3ow"><a href="#chr">chr()</a></td>
        <td class="tg-c3ow"><span style="font-weight:400;font-style:normal"><a href="#complex">complex()</a></span></td>
    </tr>
    <tr>
        <td class="tg-c3ow"><a href="#dict">dict()</a></td>
        <td class="tg-c3ow"><a href="#dir">dir()</a></td>
        <td class="tg-c3ow"><a href="#divmod">divmod()</a></td>
        <td class="tg-c3ow"><a href="#enumerate">enumerate()</a></td>
        <td class="tg-c3ow"><a href="#filter">filter()</a></td>
        <td class="tg-c3ow"><a href="#float">float()</a></td>
        <td class="tg-c3ow"><a href="#format">format()</a></td>
    </tr>
    <tr>
        <td class="tg-c3ow"><a href="#frozenset">frozenset()</a></td>
        <td class="tg-c3ow"><a href="#globals">globals()</a></td>
        <td class="tg-c3ow"><a href="#hash">hash()</a></td>
        <td class="tg-c3ow"><a href="#help">help()</a></td>
        <td class="tg-c3ow"><a href="#id">id()</a></td>
        <td class="tg-c3ow"><a href="#input">input()</a></td>
        <td class="tg-c3ow"><a href="#int">int()</a></td>
    </tr>
    <tr>
        <td class="tg-c3ow"><a href="#isinstance">isinstance()</a></td>
        <td class="tg-c3ow"><a href="#issubclass">issubclass()</a></td>
        <td class="tg-c3ow"><a href="#iter">iter()</a></td>
        <td class="tg-c3ow"><a href="#len">len()</a></td>
        <td class="tg-c3ow"><a href="#list">list()</a></td>
        <td class="tg-c3ow"><a href="#locals">locals()</a></td>
        <td class="tg-c3ow"><a href="#map">map()</a></td>
    </tr>
    <tr>
        <td class="tg-c3ow"><a href="#max">max()</a></td>
        <td class="tg-c3ow"><a href="#min">min()</a></td>
        <td class="tg-c3ow"><a href="#next">next()</a></td>
        <td class="tg-c3ow"><a href="#open">open()</a></td>
        <td class="tg-c3ow"><a href="#ord">ord()</a></td>
        <td class="tg-c3ow"><a href="#pow">pow()</a></td>
        <td class="tg-c3ow"><a href="#print">print()</a></td>
    </tr>
    <tr>
        <td class="tg-c3ow"><a href="#range">range()</a></td>
        <td class="tg-c3ow"><a href="#reversed">reversed()</a></td>
        <td class="tg-c3ow"><a href="#round">round()</a></td>
        <td class="tg-c3ow"><a href="#set">set()</a></td>
        <td class="tg-c3ow"><a href="#sorted">sorted()</a></td>
        <td class="tg-c3ow"><a href="#str">str()</a></td>
        <td class="tg-c3ow"><a href="#sum">sum()</a></td>
    </tr>
    <tr>
        <td class="tg-c3ow"><a href="#tuple">tuple()</a></td>
        <td class="tg-c3ow"><a href="#type">type()</a></td>
        <td class="tg-c3ow"><a href="#vars">vars()</a></td>
        <td class="tg-c3ow"><a href="#zip">zip()</a></td>
        <td class="tg-c3ow"></td>
        <td class="tg-c3ow"></td>
        <td class="tg-c3ow"></td>
    </tr>
    </tbody>
    </table>
</div>

> Az sonra bol bol yinelenebilir nesne (**iterable**) kavramından bahsedeceğiz. Bu nesneler, üzerinde döngüler ile gezinebileceğimiz ve öğelerini tek tek elde edebileceğimiz nesnelerdir. Bazıları: **list**, **tuple**, **str**, **dict**, **set**, **range**, **file**.
>
> <br>Arada dizi (**sequence**) kavramını kullandığıma denk gelebilirsiniz. En makul karşılığın bu olduğunu düşünüyorum. Bazıları: **list**, **tuple**, **str**.

### abs()

Kullanım şekli `abs(x)` olan bu fonksiyon, verilen sayının mutlak değerini alır.

<blockquote style="text-align: center;">İngilizcede mutlak değer anlamına gelen <b>absolute</b> kelimesinin kısaltmasıdır.</blockquote>

#### Örnekler

Bildiğimiz üzere tamsayı ve ondalıklı sayıların mutlak değerini alabiliriz:

```python
print('-3 sayısının mutlak değeri:', abs(-1))
print('-0.32 sayısının mutlak değeri:', abs(-0.1))

""" ÇIKTI:
-3 sayısının mutlak değeri: 3
-0.32 sayısının mutlak değeri: 0.32
"""
```

Aynı zamanda kompleks sayılar ile garip bir kullanımı mevcuttur. Kompleks sayıların mutlak değerini alarak büyüklüğünü (**magnitude**) elde etmiş oluruz. Formülü: $$\lvert a+bi\rvert = \sqrt{a^2+b^2}$$. Birkaç örneğini görelim:

```python
print('7 - 10j sayısının büyüklüğü:', abs(7-10j))
print('8 - 0j sayısının büyüklüğü:', abs(8-0j))

""" ÇIKTI:
7 - 10j sayısının büyüklüğü: 12.206555615733702
8 - 0j sayısının büyüklüğü: 8.0
"""
```
---

### all()

Kullanım şekli `all(iterable)` olan bu fonksiyon, verilen yinelenebilir nesnenin öğelerini kontrol eder ve hepsi True ise, True döndürür.

Yaptığı işlemin karşılığını alttaki kod parçasında görebiliriz:

```python
def all(yinelenebilir):
    for oge in yinelenebilir:
        if not oge:
            return False
    return True
```

#### Örnekler

(), [], {}, "", 0 ve 0.0 gibi değerlerin Bool karşılıkları False'tur. Dolayısıyla bu değerlerden herhangi birini barındıran diziler için sonuç False olacaktır. Sözlüklerde yalnızca anahtarların değerlerine bakar.

Bazı örneklere göz atalım:

```python
print(all([1, 3, 4, 5]))   # True
print(all([1, 3, 4, 0]))   # False
print(all([True, False]))  # False
print(all([[], [1,2,3]]))  # False
print(all([]))             # True
print(all(""))             # True
print(all({'0': 'True'}))  # True
print(all({0: 'True'}))    # False
print(all({'True': 0}))    # True
```

---

### any()

Kullanım şekli `any(iterable)` olan bu fonksiyon, yinelenebilir nesnenin öğelerini kontrol eder ve en az bir tanesi True ise, True döndürür.

Yaptığı işlemin karşılığını alttaki kod parçasında görebiliriz:

```python
def any(iterable):
    for element in iterable:
        if element:
            return True
    return False
```

#### Örnekler

`all()` fonksiyonunda bahsettiğimiz gibi (), [], {}, "", 0 değerlerinin Bool karşılıkların False'tur. Tekrar değindikten sonra bazı örneklere göz atalım:

```python
print(all([1, 3, 4, 5]))   # True
print(all([1, 3, 4, 0]))   # True
print(all([True, False]))  # True
print(all([[], [1,2,3]]))  # True
print(all([]))             # False
print(all(""))             # False
print(all({'0': 'True'}))  # True
print(all({0: 'True'}))    # False
print(all({'True': 0}))    # True
```

---

### bin()

Kullanım şekli `bin(x)` olan bu fonksiyon, verilen tamsayıyı binary sayıya çevirir.

#### Örnekler

Bazı örneklere göz atalım:

```python
print('12 sayısının binary karşılığı:', bin(12))  # 0b1100
```

> Burada **'0b'** öneki sonucun binary string olduğunu belirtir.

---

### bool()

Kullanım şekli `bool(value)` olan bu fonksiyon, verilen değere karşılık gelen Bool değerini verir.

<blockquote style="text-align: center;">Argüman verilmemiş veyahut verilen değer boş yani<br>(), [], {}, "", 0 ve 0.0 değerlerinden birisi ise False, aksi takdirde True verir.</blockquote>

<blockquote style="text-align: center;">Python'daki garip özelliklerden birisinden bahsetmek istiyorum. Bool, Integer'dan türetilmiştir yani onun alt sınıfıdır. Çok düşünmeden 0 sayısına False ve diğer tüm sayılara ise True demişler.</blockquote>

#### Örnekler

Bazı örneklere göz atalım:

```python
print(bool())            # False
print(bool([]))          # False
print(bool({}))          # False
print(bool(""))          # False
print(bool(0))           # False

print(bool([1,2,3]))     # True
print(bool("deneme"))    # True
print(bool(" "))         # True
```

---

### chr()

Kullanım şekli `chr(i)` olan bu fonksiyon, ASCII değere karşılık gelen karakteri verir.

<blockquote style="text-align: center;"><b>ord()</b> fonksiyonunun tam tersidir.</blockquote>

#### Örnekler

Bazı örneklere göz atalım:

```python
print(chr(65))    # A
print(chr(90))    # Z
print(chr(97))    # a
print(chr(122))   # z
```
---

### complex()

Kullanım şekli `complex(real,imag)` olan bu fonksiyon, gerçek ve sanal kısımlar verildiğinde karmaşık sayı üretir veya bir string'i karmaşık sayıya dönüştürür.

<blockquote style="text-align: center;">Argüman olarak string verildiyse başka verilmemelidir.<br>Yani <b>real</b> ve <b>imag</b> argümanları atlanmalıdır.</blockquote>

#### Örnekler

j veya J harflerinden ikisini de kullanabiliriz. Gelin bazı örneklere göz atalım:

```python
print(complex())        # 0j
print(complex(8, 1))    # (8+1j)
print(complex(1))       # (1+0j)
print(complex('2-2j'))  # (2-2j)
print(complex('-2J'))   # -2j
```

### dict()

Kullanım şekli `dict(**kwarg)` olan bu fonksiyon, sözlük oluşturmamızı sağlar.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(dict())
print(dict(x=5, y=0))
print(dict([('x', 5), ('y', -5)]))
print(dict([('x', 5), ('y', -5)], z=8))
print(dict(zip(['x', 'y', 'z'], [1, 2, 3])))
print(dict({'x': 4, 'y': 5}, z=8))

""" ÇIKTI:
{}
{'x': 5, 'y': 0}
{'x': 5, 'y': -5, 'z': 8}
{'x': 1, 'y': 2, 'z': 3}
{'x': 4, 'y': 5, 'z': 8}
"""
```

### dir()

Kullanım şekli `dir(object)` olan bu fonksiyon, verilen sınıfın veya nesnenin öznitelik listesini verir.

#### Örnekler

Bazı örneklere göz atalım:

```python
number = [1, 2, 3]
print(dir(number))

""" ÇIKTI:
['__add__', '__class__', '__contains__', '__delattr__',
 '__delitem__', '__dir__', '__doc__', '__eq__', '__format__',
 '__ge__', '__getattribute__', '__getitem__', '__gt__',
 '__hash__', '__iadd__', '__imul__', '__init__',
 '__init_subclass__', '__iter__', '__le__', '__len__',
 '__lt__', '__mul__', '__ne__', '__new__', '__reduce__',
 '__reduce_ex__', '__repr__', '__reversed__', '__rmul__',
 '__setattr__', '__setitem__', '__sizeof__', '__str__',
 '__subclasshook__', 'append', 'clear', 'copy', 'count',
 'extend', 'index', 'insert', 'pop', 'remove', 'reverse',
 'sort']
"""
```

Çıktıda yer alan ifadelerden <b>"__"</b> içerenler arkaplanda Python tarafından kullanılan gizli metodlar ve özniteliklerdir. Bizim genelde diğerlerini kullanacağız. Gizlileri çıktımız içerisinden ayıklayabiliriz:

```python
print([metod for metod in dir(list) if metod.startswith("__")])

""" ÇIKTI:
['append', 'clear', 'copy', 'count', 'extend', 'index',
'insert', 'pop', 'remove', 'reverse', 'sort']
"""
```

### divmod()

Kullanım şekli `divmod(a, b)` olan bu fonksiyon, aldığı iki sayının bölümünü ve kalanını tuple olarak döndürür.

#### Örnekler

Bazı örneklere göz atalım:

```python
print('divmod(8, 3)     = ', divmod(8, 3))
print('divmod(3, 8)     = ', divmod(3, 8))
print('divmod(5, 5)     = ', divmod(5, 5))

print('divmod(8.0, 3)   = ', divmod(8.0, 3))
print('divmod(3, 8.0)   = ', divmod(3, 8.0))
print('divmod(7.5, 2.5) = ', divmod(7.5, 2.5))
print('divmod(2.6, 0.5) = ', divmod(2.6, 0.5))

""" ÇIKTI:
divmod(8, 3)     =  (2, 2)
divmod(3, 8)     =  (0, 3)
divmod(5, 5)     =  (1, 0)
divmod(8.0, 3)   =  (2.0, 2.0)
divmod(3, 8.0)   =  (0.0, 3.0)
divmod(7.5, 2.5) =  (3.0, 0.0)
divmod(2.6, 0.5) =  (5.0, 0.10000000000000009)
"""
```

Bir senaryo kurarak güzel bir örnek yapalım. Bakkala gidip elimizdeki parayı 10 TL, 5 TL, 1 TL, 50 kuruş ve 25 kuruş olarak delicesine bozdurup dayak yemek istiyoruz. İçeriye gidiyoruz ve söylüyoruz. O da ne? Bakkalcı eski bir yazılımcı çıktı. Bunu hesaplamak için script yazmış. Sakince kodu çalıştırıyor:

```python
def bakkalcinin_para_bozma_makinesi(elimizdeki_para):
    para_adetleri = {
        10  : 0,
        5   : 0,
        1   : 0,
        0.5 : 0,
        0.25: 0
    }

    for para_turu in para_adetleri:
        # 10 TL için bakacak olursak elimizdeki
        # paranın 10'a bölümü bize 10 TL miktarını
        # verir. Kalan sayi üzerinden diğer paraları
        # ararız. İlk divmod sonucu (1, 9.75) olacaktır.
        # Dolayısıyla bölüm olan 1 sayı miktarı olarak
        # sözlüğe eklenir. Kalan ise yeni para miktarı
        # kabul edilir
        bolum, kalan = divmod(elimizdeki_para, para_turu)
        para_adetleri[para_turu] += int(bolum)
        elimizdeki_para = kalan

    return para_adetleri

elimizdeki_para = 19.75
para_adetleri = bakkalcinin_para_bozma_makinesi(elimizdeki_para)
print(f"Bakkalcıya verdiğimiz para: {elimizdeki_para}")
for para_turu in para_adetleri:
    print(f"{para_turu} TL sayısı: {para_adetleri[para_turu]}")

print("\nHayırlı işler abi!")

""" ÇIKTI:
Cüzdandaki para miktarı: 19.75
  10 TL sayısı: 1
   5 TL sayısı: 1
   1 TL sayısı: 4
0.50 TL sayısı: 1
0.25 TL sayısı: 1

Hayırlı işler abi!
"""
```

Tamamdır. Artık paraları alıp başka bakkala tümletmeye gidebiliriz!

---

### enumerate()

Kullanım şekli `enumerate(iterable, start=0))` olan bu fonksiyon, yinelenebilir bir nesnenin elemanlarını numaralandırır ve her eleman için numarayı ve kendisini tuple olarak olarak tutan liste döndürür. Varsayılan olarak numaralandırmaya 0'dan başlar ancak **start** argümanı ile ayarlayabiliriz. Döndürdüğü değer bir tür **iterator** olan **enumerate** nesnesidir.

<blockquote style="text-align: center;">Bu fonksiyonu kullanabilmek için genelde listeye çeviririz. Bu sayede bellekte yer tutar. Dolayısıyla tüm öğelerine erişebilir, ekrana yazdırabiliriz.</blockquote>

#### Örnekler

Bazı örneklere göz atalım:

```python
mevsimler = ("İlkbahar", "Yaz", "Sonbahar", "Kış")
print(list(enumerate(mevsimler)))

""" ÇIKTI:
[(0, 'İlkbahar'), (1, 'Yaz'), (2, 'Sonbahar'), (3, 'Kış')]
"""
```

Daha içten bir örnek verelim. Bu fonksiyon yardımıyla şehirlerimizin plakalarını otomatik olarak atayabiliriz:

```python
sehirler=["Adana", "Adıyaman", "Afyon", "Ağrı",
"Amasya", "Ankara", "Antalya", "Artvin", "Aydın",
"Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu",
"Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum",
"Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan",
"Erzurum", "Eskişehir", "Gaziantep", "Giresun",
"Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin",
"İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri",
"Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya",
"Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla",
"Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya",
"Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ",
"Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak",
"Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt",
"Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
"Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis",
"Osmaniye", "Düzce", "Kerkük", "Musul"
]

# start=1 dediğimize dikkat edin. Varsayılan olarak
# sıfırdan başlayacağını söylemiştik.
print(list(enumerate(sehirler, start=1)))

""" ÇIKTI:
[(1, 'Adana'), (2, 'Adıyaman'), (3, 'Afyon'),
(4, 'Ağrı'), (5, 'Amasya'), (6, 'Ankara'), 
(7, 'Antalya'), (8, 'Artvin'), (9, 'Aydın'), 
(10, 'Balıkesir'), (11, 'Bilecik'), 
(12, 'Bingöl'), (13, 'Bitlis'), (14, 'Bolu'),
(15, 'Burdur'), (16, 'Bursa'), (17, 'Çanakkale'),
(18, 'Çankırı'), (19, 'Çorum'), (20, 'Denizli'), 
(21, 'Diyarbakır'), (22, 'Edirne'), (23, 'Elazığ'), 
(24, 'Erzincan'), (25, 'Erzurum'), 
(26, 'Eskişehir'), (27, 'Gaziantep'), 
(28, 'Giresun'), (29, 'Gümüşhane'), (30, 'Hakkari'), 
(31, 'Hatay'), (32, 'Isparta'), (33, 'İçel (Mersin)'), 
(34, 'İstanbul'), (35, 'İzmir'), (36, 'Kars'),
(37, 'Kastamonu'), (38, 'Kayseri'), (39, 'Kırklareli'),
(40, 'Kırşehir'), (41, 'Kocaeli'), (42, 'Konya'), 
(43, 'Kütahya'), (44, 'Malatya'), (45, 'Manisa'), 
(46, 'Kahramanmaraş'), (47, 'Mardin'), (48, 'Muğla'), 
(49, 'Muş'), (50, 'Nevşehir'), (51, 'Niğde'),
(52, 'Ordu'), (53, 'Rize'), (54, 'Sakarya'), 
(55, 'Samsun'), (56, 'Siirt'), (57, 'Sinop'), 
(58, 'Sivas'), (59, 'Tekirdağ'), (60, 'Tokat'), 
(61, 'Trabzon'), (62, 'Tunceli'), (63, 'Şanlıurfa'), 
(64, 'Uşak'), (65, 'Van'), (66, 'Yozgat'), 
(67, 'Zonguldak'), (68, 'Aksaray'), (69, 'Bayburt'), 
(70, 'Karaman'), (71, 'Kırıkkale'), (72, 'Batman'), 
(73, 'Şırnak'), (74, 'Bartın'), (75, 'Ardahan'), 
(76, 'Iğdır'), (77, 'Yalova'), (78, 'Karabük'), 
(79, 'Kilis'), (80, 'Osmaniye'), (81, 'Düzce'), 
(82, 'Kerkük'), (83, 'Musul')]
"""
```

Bu fonksiyonu genelde **for** döngüsüyle birlikte kullanırız. Önceki örneği değiştirelim:

```python
for plaka, sehir in enumerate(sehirler, start=1):
    print(f"{plaka} plakalı sehir: {sehir}")
    
""" ÇIKTI:
1 plakalı sehir: Adana
2 plakalı sehir: Adıyaman
3 plakalı sehir: Afyon
4 plakalı sehir: Ağrı
5 plakalı sehir: Amasya
...
79 plakalı sehir: Kilis
80 plakalı sehir: Osmaniye
81 plakalı sehir: Düzce
82 plakalı sehir: Musul
83 plakalı sehir: Kerkük
"""
```

---

### filter()

Kullanım şekli `filter(function, iterable)` olan bu fonksiyon, yinelenebilir nesnenin tüm öğelerini filtreden (fonksiyon) geçirir. Filtreden geçen yani True dönen öğeleri bir yineleyiciye ekler ve döndürür.

Bu fonksiyona karşılık olarak şu **list compherension** kodunu verebiliriz:

```python
(oge for oge in yinelenebilir if fonksiyon(oge))
```

#### Örnekler

Bazı örneklere göz atalım:

```python
harfler = ['a', 'b', 'd', 'e', 'i', 'j', 'o']

def filtreSesliHarfler(harf):
    sesli_harfler = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']

    if(harf in sesli_harfler):
        return True
    else:
        return False

filtrelenmis_sesli_harfler = filter(filtreSesliHarfler, harfler)

print('Filtrelenmiş sesli harfler:')
for sesli_harf in filtrelenmis_sesli_harfler:
    print(sesli_harf)

""" ÇIKTI:
Filtrelenmiş sesli harfler:
a
e
i
o
"""
```

Argüman vermediğimizde gerçekleştireceği davranış, öğe True ise filtreden geçirmektir:

```python
her_telden_liste = [1, 'a', 0, False, True, '0']

filtrelenmis_liste = filter(None, her_telden_liste)

print('Filtrelenmiş öğeler:')
for oge in filtrelenmis_liste:
    print(oge)

""" ÇIKTI:
Filtrelenmiş öğeler:
1
a
True
0
"""
```

---

### float()

Kullanım şekli `float(x)` olan bu fonksiyon, tamsayı ve string'leri ondalıklı sayıya çevirir.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(float('+1.23'))
1.23
print(float('   -12345\n'))
-12345.0
print(float('1e-003'))
0.001
print(float('+1E6'))
1000000.0
```

<blockquote style="text-align: center;">Baştaki ve sondaki whitespace (boşluk, alt satır vs.) karakterleri otomatik<br>kaldırdığına ve sadece sayıyı aldığına dikkat edin.</blockquote>

Aynı zamanda önceden tanımlı bazı stringleri kullanabiliriz. **NaN** ifadesi değerin gerçek sayı uzayında olmadığını (örneğin 0/0) söylerken, **inf** sonsuz sayı olduğunu (örneğin 1/0) söyler. Farklı tiplerde yazım şekilleri mevcuttur:

```python
print(float("nan"))       # nan
print(float("NaN"))       # nan

print(float("inf"))       # inf
print(float("InF"))       # inf
print(float("InFiNiTy"))  # inf
print(float("infinity"))  # inf
```
---

### format()

Kullanım şekli `format(value, format_spec)` olan bu fonksiyon, verilen değerin biçimlendirilmiş halini döndürür.

Sırası şu şekildedir:

```
[[fill]align][sign][#][0][width][,][.precision][type]  
fill        ::=  any character  
align       ::=  "<" | ">" | "=" | "^"  
sign        ::=  "+" | "-" | " "  
width       ::=  integer  
precision   ::=  integer  
type        ::=  "b" | "c" | "d" | "e" | "E" | "f" | "F" | "g" | "G" | "n" | "o" | "s" | "x" | "X" | "%"  
```

#### Örnekler

Bazı örneklere göz atalım:

```python
# "d" : integer
print(format(123, "d"))             # 123
# "f" : float
print(format(123.4567898, "f"))     # 123.456790
# "b" : binary
print(format(12, "b"))              # 1100
```

```python
# "*" : boşlukları dolduracak karakter
# ">" : sağa hizala
# "+" : işaret
# "7" : genişlik
# "," : binliklerin arasına virgül
print(format(1234, "*>+7,d"))
print(format(123.4567, "^-09.3f"))

""" ÇIKTI:
*+1,234
0123.4570
"""
```
---

### frozenset()

Kullanım şekli `frozenset(iterable)` olan bu fonksiyon, verilen yineleyici nesnenin öğelerini barındıran <b>immutable</b> özellikte set nesnesi oluşturur.

<blockquote style="text-align: center;">Bildiğimiz üzere normal set değiştirilebilir yani mutable'dır.</blockquote>

#### Örnekler

Bazı örneklere göz atalım:

```python
sesli_harfler_set = {'a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'}

sesli_harfler_frozenset= frozenset(sesli_harfler_set)
print(f"Dondurulmuş küme: {sesli_harfler_frozenset}")

""" ÇIKTI:
Dondurulmuş küme: frozenset({'e', 'ö', 'u', 'o', 'a', 'ü', 'ı', 'i'})
"""
```

---

### globals()

Kullanım şekli `globals()` olan bu fonksiyon, o anda programa dair tutulan tüm bilgileri gösterir. Örneğin o sırada yaşayan değişkenleri, sınıfları ve fonksiyonları görebiliriz.

#### Örnekler

Bazı örneklere göz atalım:

```python
class sinif_1():
    pass
    
def fonksiyon_1():
    pass

degisken_1 = 0
degisken_2 = ""
degisken_3 = []

print(globals())

""" ÇIKTI:
{
'__name__': '__main__', 
'__doc__': None, 
'__package__': None, 
'__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x7f432c98acd0>, 
'__spec__': None, 
'__annotations__': {}, 
'__builtins__': <module 'builtins' (built-in)>, 
'__file__': '/home/enesbaspinar/blog/deneme.py', '__cached__': None,
'degisken_1': 0, 
'degisken_2': '', 
'degisken_3': [], 
'sinif_1': <class '__main__.sinif_1'>, 
'fonksiyon_1': <function fonksiyon_1 at 0x7f7bb670f280>}
"""

degisken_3 = [1,2,3]

print(globals())

# Fazlaca yer kaplamaması adına öncesindekileri ve
# sonrasındakileri ... ile kısalttım.

""" ÇIKTI:
{
...
'degisken_3': [1,2,3], 
...
"""
```

---

### hash()

Kullanım şekli `hash(object)` olan bu fonksiyon, bir nesnenin değerine bağlı olarak yapılan bazı hesaplamalar sonucunda üretilen **hash** değerini döndürür. Detay istiyorsanız şu videoya göz atabilirsiniz:

<div class="iframe-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/2BldESGZKB8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>
</div>
<br>

> Her nesnenin **hash** değeri olmayabilir. Olan her nesnenin de benzersiz bir değere sahip olacağının garantisi yoktur.

> Listelerin sözlüklerde anahtar olarak kullanılamadığına şahit olmuşsunuzdur ancak tuple nesneler kullanılabilirler. İşte bunun sebebi hash değeridir!<br><br>Sözlüğe eklenen tüm anahtarlar **hash** değeri ve sözlükteki değeri ile birlikte **hash table**'da tutulurlar (performans nedeniyle). Sözlükte arama yapılırken de anahtarların **hash** değerlerine bu tablodan bakılır ve işaret ettiği değer alınır. Listeler için işler burada karışmaya başlıyor. **mutable** nesnelerin içeriğinin değişebileceğini biliyoruz. Anahtar olarak atandıktan sonra bir listeyi değiştirdiğimizde **hash** değeri de değişir. Ancak tabloda hala eski **hash** değeri bulunduğundan dolayı artık erişim sağlayamayız. Bu sebeptendir ki Python, kararlı bir yapının bozulmasına razı gelmez ve mutable değişkenlerin anahtar olarak kullanılmasına izin vermez.

#### Örnekler

Bazı örneklere göz atalım:

```python
print("hash(10)    :", hash(10))
print("hash(2.99)  :",hash(2.99))
print("hash('elma'):", hash('elma'))

""" ÇIKTI:
hash(10)    : 10
hash(2.99)  : 2282784579121557506
hash('elma'): 3443108836276707476
"""
```

---

### help()

Kullanım şekli `help(object)` olan bu fonksiyon, takıldığımızda yardımımıza koşar.

> Argüman olarak verdiğimiz fonksiyona veya sınıfa ait özellikleri yazdırır.

#### Örnekler

**print()** fonksiyonumuzun yardım sayfasına bakalım:

```python
print(help(print))

""" ÇIKTI:
Help on built-in function print in module builtins:

print(...)
    print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)
    
    Prints the values to a stream, or to sys.stdout by default.
    Optional keyword arguments:
    file:  a file-like object (stream); defaults to the current sys.stdout.
    sep:   string inserted between values, default a space.
    end:   string appended after the last value, default a newline.
    flush: whether to forcibly flush the stream.
"""
```

İkinci olarak da bir sınıfın yardım sayfasına bakmış olalım:

```python
# tuple yazmak ile aynı şey
print(help((1,3,5)))

""" ÇIKTI:
class tuple(object)
 |  tuple(iterable=(), /)
 |  
 |  Built-in immutable sequence.
 |  
 |  If no argument is given, the constructor returns an empty tuple.
 |  If iterable is specified the tuple is initialized from iterable's items.
 |  
 |  If the argument is a tuple, the return value is the same object.
 |  
 |  Built-in subclasses:
 |      asyncgen_hooks
 |      UnraisableHookArgs
 |  
 |  Methods defined here:
 |  
 |  __add__(self, value, /)
 |      Return self+value.
 ...gereksiz metodlar...
 |  count(self, value, /)
 |      Return number of occurrences of value.
 |  
 |  index(self, value, start=0, stop=9223372036854775807, /)
 |      Return first index of value.
 |      
 |      Raises ValueError if the value is not present.
"""
```

Benim gibi, garip şeyleri kurcalamak isteyenler olacaktır. Fırsat bulmuşken denemedik demeyelim:

```python
print(help(help))

""" ÇIKTI:
class _Helper(builtins.object)
 |  Define the builtin 'help'.
 |  
 |  This is a wrapper around pydoc.help that provides a helpful message
 |  when 'help' is typed at the Python interactive prompt.
 |  
 |  Calling help() at the Python prompt starts an interactive help session.
 |  Calling help(thing) prints help for the python object 'thing'.
 |  
 |  Methods defined here:
 |  
 |  __call__(self, *args, **kwds)
 |      Call self as a function.
 |   __repr__(self)
 |      Return repr(self).
 |  
 |  ----------------------------------------------------------------------
 |  Data descriptors defined here:
 |  
 |  __dict__
 |      dictionary for instance variables (if defined)
 |  
 |  __weakref__
 |      list of weak references to the object (if defined)
"""
```

---

### id()

Kullanım şekli `id(object)` olan bu fonksiyon, verilen nesnenin tamsayı cinsinden benzersiz kimliğini verir.

> Kimlik değeri, nesnenin bellekteki adresidir. Aynı adreste 2 veri olamayacağından dolayı farklı iki nesnenin kimliği aynı olamaz. Ancak program bitip tekrar çalıştırdığımızda kimlikler değişir.

> Değişkenlerin bellekte saklanmasıyla ilgili [Değişken Deyince Ne Anlamalı?]({{site.url}}/python/degisken-deyince-ne-anlamali/) isimli çeviri yazıma göz atabilirsiniz. Python'daki değişkenleri anlayabilmek için kesinlikle okumalısınız.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(id("balon"))   # 139705616810992
print(id(10))        # 94915409632864
```

---

### input()

Kullanım şekli `input(prompt)` olan bu fonksiyon, kullanıcıdan veri almamızı sağlar. Veri isterken ne için istediğimizi kullanıcıya söylemek istersek **prompt** argümanını kullanabiliriz. 

> Bu fonksiyon daima string veri döndürür. Dolayısıyla kullanıcıdan sayı istediğimizde kullanabilmek için tür dönüşümü yapmamız gerekir.

#### Örnekler

Bazı örneklere göz atalım:

```python
print("Kötü Uygulama (rastgele bir şey yazın)\n")
kullanici_adi = input()
print("Kullanıcı adınız:", kullanici_adi)
print("----------------------------------------")
# Daha iyi bir uygulama açıklama verilmesidir.
print("\nGüzel Uygulama\n")
kullanici_adi = input("Kullanıcı adınızı girin: ")
print("Kullanıcı adınız:", kullanici_adi)

""" ÇIKTI:
Kötü Uygulama (ne istiyor belli değil rastgele bir şey yazın)

5
Kullanıcı adınız: 5
----------------------------------------
Güzel Uygulama

Kullanıcı adınızı girin: enesbaspinar
Kullanıcı adınız: enesbaspinar
"""
```

Kullanıcıdan yaşını da isteyelim:

```python
yas = input("Yaşınızı girin: ")
print("Yaşınız:", yas)
print(type(yas))

""" ÇIKTI:
Yaşınızı girin: 21
Yaşınız: 21
<class 'str'>
"""
```

Tamam istediğimiz gibi ekrana yazdırdı ancak string olduğundan dolayı matematiksel işlemler gerçekleştiremeyiz. Bunun için tür dönüşümü yapmamız gerektiğini söylemiştik:

```python
yas = int(input("Yaşınızı girin: "))
dogum_tarihi = 2020 - yas
print("Doğum tarihiniz:", dogum_tarihi)

""" ÇIKTI:
Yaşınızı girin: 21
Doğum tarihiniz: 1999
"""
```

---

### isinstance()

Kullanım şekli `isinstance(object, classinfo)` olan bu fonksiyon, ilk argümanda verilen nesnenin ikinci argümanda verilen sınıfa ait olup olmadığını kontrol eder.

> İkinci argüman olarak birden çok sınıf barındıran tuple nesnesi de verilebilir.<br>Bu durumda ait olduğu sınıfı barındırıp barındırmadığına bakacaktır.

> Sınıflardan ürettiğimiz verilere **object** (nesne) diyebildiğimiz gibi **instance** (örnek) da diyebiliriz. Bu terimler birbiri yerine kullanılırlar. Fonksiyonun ismi bu sebepten böyledir.

#### Örnekler

Bazı örneklere göz atalım:

```python
sayi_listesi = [1, 2, 3]

print("-sayi_listesi liste sınıfının nesnesi mi?", 
      isinstance(sayi_listesi, list))
print("-sayi_listesi sözlük sınıfına nesnesi mi?", 
      isinstance(sayi_listesi, dict))
print("-sayi_listesi liste veya sözlük sınıflarından birisinin nesnesi mi?", 
      isinstance(sayi_listesi, (dict, list)))

""" ÇIKTI:
-sayi_listesi liste sınıfının nesnesi mi? True
-sayi_listesi sözlük sınıfına nesnesi mi? False
-sayi_listesi liste veya sözlük sınıflarından
birisinin nesnesi mi? True
"""
```

---

### issubclass()

Kullanım şekli `issubclass(class, classinfo)` olan bu fonksiyon, ilk argümanda verilen sınıfın, ikinci argümanda verilenin alt sınıfı olup olmadığını kontrol eder.

> İkinci argüman olarak birden çok sınıf barındıran tuple nesnesi de verilebilir. Bu durumda herhangi birisinin alt sınıfı olup olmadığına bakacaktır.

#### Örnekler

Bazı örneklere göz atalım:

```python
class Araba:
    def __init__():
        pass

class Sekil:
    def __init__():
        pass

class Kare(Sekil):
    def __init__():
        pass
    
print("Kare sınıfı Şekil sınıfının alt sınıfı mı:",
       issubclass(Kare, Sekil))
print("Kare sınıfı Araba sınıfının alt sınıfı mı:",
       issubclass(Kare, Araba))
print("Kare sınıfı Şekil veya Araba sınıfının alt sınıfı mı:",
      issubclass(Kare, (Araba, Sekil)))

""" ÇIKTI:
Kare sınıfı Şekil sınıfının alt sınıfı mı: True
Kare sınıfı Araba sınıfının alt sınıfı mı: False
Kare sınıfı Şekil veya Araba sınıfının alt sınıfı mı: True
"""
```

---

### int()

Kullanım şekli `int(x)` olan bu fonksiyon, float veya string değerleri tamsayıya çevirir.

> Integer değişkenlerin varsayılan değeri 0'dır. Bunun nedeni boş nesne oluşturduğumuzda o nesnede False değerine karşılık gelen değerin verilmesidir (örneğin değer verilmeyen float'ın ilk değeri 0.0, string'in "", listenin ise [] olacaktır).

#### Örnekler

Bazı örneklere göz atalım:

```python
print(int())           # 0
print(int(2.99))       # 2
print(int("1999"))     # 1999
print(int(" 1999 \n")) # 1999
# (string'in başındaki ve sonundaki boşlukları 
# ve \n karakterini otomatik siler)
```

### iter()

Kullanım şekli `iter(object)` olan bu fonksiyon, verilen nesnenin öğelerini teker teker veren **iterator** nesnesi döndürür. Döngülerle birlikte kullanıldığında kullanışlıdır.

#### Örnekler

Bazı örneklere göz atalım:

```python
sinif_listesi = ["Ali", "Veli", "Ayşe", "Ahmet"]
sinif_listesi_iter = iter(sinif_listesi)

print(next(sinif_listesi_iter))
print(next(sinif_listesi_iter))
print(next(sinif_listesi_iter))
print(next(sinif_listesi_iter))
print(next(sinif_listesi_iter))

""" ÇIKTI:
Ali
Veli
Ayşe
Ahmet
Traceback (most recent call last):
  File "/home/enesbaspinar/blog/deneme.py", line 8, in <module>
    print(next(sinif_listesi_iter))
StopIteration
"""
```

Görebileceğimiz üzere sırada öğe kalmayınca kod hata verdi. Bunun önüne geçmek için döngü kullanabiliriz. Döngü kurduğumuzda **iter()** fonksiyonu otomatik çağrılır ve nesne oluşturulur. Döngü sonunda ise otomatik olarak **next()** fonksiyonu çağrılır ve diğer iterasyonda diğer öğeye geçer. Nesne kalmayınca hata vermez, programa kaldığı yerden devam eder:

```python
sinif_listesi = ["Ali", "Veli", "Ayşe", "Ahmet"]

for i in sinif_listesi:
    print(i)

""" ÇIKTI:
Ali
Veli
Ayşe
Ahmet
"""
```

---

### len()

Kullanım şekli `len(s)` olan bu fonksiyon, yinelenebilir bir nesnenin uzunluğunu yani eleman sayısını verir.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(len([1, 2, 3]))              # 3
print(len((1, 2, 3)))              # 3
print(len(range(1, 10)))           # 9
print(len("Python"))               # 6
print(len({1: 'one', 2: 'two'}))   # 2
```

---

### list()

Kullanım şekli `list(iterable)` olan bu fonksiyon, liste oluşturabilmemizi sağlar.

> Sözlüğü listeye dönüştürmek istediğimizde, sözlüğün sadece anahtarlarını eleman sırası rastgele olacak şekilde listeye dönüştürmüş oluruz.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(list())
print(list(range(10)))
print(list('aeıioöuü'))
print(list(('a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü')))
print(list(['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']))
print(list({'a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'}))
print(list({'a': 1, 'e': 2, 'ı': 3, 'i': 4, 'o': 5,
            'ö': 6, 'u': 7, 'ü': 8}))

""" ÇIKTI:
[]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']
['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']
['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']
['e', 'i', 'ı', 'a', 'ö', 'u', 'ü', 'o']
['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']
"""
```

---

### locals()

Kullanım şekli `locals()` olan bu fonksiyon, <b>global()</b>'in aksine çağırıldığı bloğun bilgilerini tutar. Örneğin bu sayede yaşayan değişkenleri, sınıfları ve fonksiyonları görebiliriz.

<blockquote style="text-align: justify;">Blok diyince ne diyor bu diyenler olabilir. Blogk Python'da girintileme seviyesini belirtir diyebilirim kabaca. Sınıf ve fonksiyonlar ve diğer nesnelerden sonra yaptığımız girintileme bitene kadar olan tüm kodlar o bloka ait sayılır.<br><br>

<pre>
def deneme_fonk():
    # blok 1
    ...
    for oge in deneme_list:
        # blok 2
        ...
</pre>

</blockquote>

#### Örnekler

Bazı örneklere göz atalım:

```python
degisken_1 = 0
degisken_2 = ""
degisken_3 = []

class sinif_1():
    pass
    
def fonksiyon_1():
    degisken_4 = 0
    degisken_5 = ""
    degisken_6 = []
    print(locals())

fonksiyon_1()

""" ÇIKTI:
{'degisken_4': 0, 'degisken_5': '', 'degisken_6': []}
"""
```

---

### map()

Kullanım şekli `map(function, iterable)` olan bu fonksiyon, yinelenebilir nesnenin tüm öğelerine verilen fonksiyonu ugular ve sonuçlarını liste olarak döndürür.

> Birden fazla yinelenebilir öğe verebiliriz.

> Bu tarz fonksiyon içerisinde fonksiyon verilmesi gerektiği durumlarda, yapılacak işlem karmaşık değilse **lambda** fonksiyonları çok kullanışlıdır.

#### Örnekler

Bazı örneklere göz atalım:

```python
sayi_listesi = (1, 2, 3, 4)
sonuc = map(lambda sayi:sayi*sayi, sayi_listesi)
print(list(sonuc))

""" ÇIKTI:
[1, 4, 9, 16]
"""
```

Birden fazla yinelenebilir nesneyi bir arada kullanabiliriz:

```python
liste1 = [4, 5, 6]
liste2 = [5, 6, 7]

sonuc = map(lambda sayi1, sayi2: sayi1+sayi2, liste1, liste2)
print(list(sonuc))

""" ÇIKTI:
[9, 11, 13]
"""
```

---

### max()

Kullanım şekli `max(iterable, key)` olan bu fonksiyon, yinelenebilir nesnedeki en büyük öğeyi döndürür. **key** argümanı ile verilen fonksiyonu her öğeye uygular ve yeni liste üretir. Karşılaştırmayı bu listeye göre yapar ve en büyük olanın indeksini bulur. Sonrasında orjinal listede o indekste bulunan değeri döndürür. Karmaşık gözüktü biliyorum ama örneği denediğinizde oturacaktır.



#### Örnekler

Bazı örneklere göz atalım:

```python
sayi_listesi = [3, 2, 8, 5, 10, 6]
en_buyuk_sayi = max(sayi_listesi)

print("Listedeki en büyük sayı:", en_buyuk_sayi)

""" ÇIKTI:
Listedeki en büyük sayı: 10
"""
```

```python
buyuk_sayi = max(4, -5, 23, 5)
print("En büyük sayı:", buyuk_sayi)

""" ÇIKTI:
En büyük sayı: 23
"""
```

Öğeler string ise alfabetik sıraya göre en sonda olanı verecektir:

```python
programlama_dilleri = ["Python", "C++", "Julia", "Matlab"]
sondaki_dil = max(programlama_dilleri)

print("Alfabetik sıraya göre sondaki dil:", 
       sondaki_dil)

""" ÇIKTI:
Alfabetik sıraya göre sondaki dil: Python
"""
```

Tekrar sayılara dönelim ve küçük bir sayı listesinde 0'a en uzak olan sayıyı bulalım. Burada dikkat etmemiz gereken şey, negatif sayıların sadece ters yönde uzaklık belirtmesidir. Bu yüzden en büyük sayıyı seçerken **key** argümanını kullanarak sayıların mutlak değerini alacağız:

```python
sayi_listesi = [30,12,6,9,-4,-6,-12,-20]
en_uzak_sayi = max(sayi_listesi, key=lambda sayi: abs(sayi))

print("Sıfıra en uzak sayı:", en_uzak_sayi)

""" ÇIKTI:
Sıfıra en uzak sayı: 30
"""
```

Son olarak elimizde olan listelerden en çok elemanı olanı bulmaya çalışalım:

```python
listeler = [[19,1,9], [20,11,8,5], [7]]
en_fazla_elemanli = max(listeler, key=len)
print("En fazla elemanı olan liste:", en_fazla_elemanli)

""" ÇIKTI:
En fazla elemanı olan liste: [20,11,8,5]
"""
```

---

### min()

Kullanım şekli `min(iterable, key)` olan bu fonksiyon, yinelenebilir nesnedeki en küçük öğeyi döndürür. **key** argümanı ile belirtilen fonksiyonu her öğeye uygular ve yeni liste üretir. Karşılaştırmayı bu listeye göre yapar ve en küçük olanın indeksini bulur. Sonrasında orjinal listede o indekste bulunan değeri döndürür. Karmaşık gözüktü biliyorum ama örneği denediğinizde oturacaktır.

#### Örnekler

Bazı örneklere göz atalım:

```python
sayi_listesi = [3, 2, 8, 5, 10, 6]
en_kucuk_sayi = min(sayi_listesi)

print("Listedeki en küçük sayı:", en_kucuk_sayi)

""" ÇIKTI:
Listedeki en küçük sayı: 2
"""
```

```python
en_kucuk_sayi = min(4, -5, 23, 5)
print("En küçük sayı:", en_kucuk_sayi)

""" ÇIKTI:
En küçük sayı: -5
"""
```


Öğeler string ise alfabetik sıraya göre en sonda olanı verecektir:

```python
programlama_dilleri = ["Python", "C++", "Julia", "Matlab"]
bastaki_dil = min(programlama_dilleri)

print("Alfabetik sıraya göre baştaki dil:", bastaki_dil)

""" ÇIKTI:
Alfabetik sıraya göre baştaki dil: C++
"""
```

Tekrar sayılara dönelim ve küçük bir sayı listesinde 0'a en yakın olan sayıyı bulalım. Burada dikkat etmemiz gereken şey, negatif sayıların sadece ters yönde uzaklık belirtmesidir. Bu yüzden en küçük sayıyı seçerken **key** argümanını kullanarak sayıların mutlak değerini alacağız:

```python
sayi_listesi = [30,12,6,9,-4,-6,-12,-20]
sifira_en_yakin_sayi = min(sayi_listesi, key=lambda x: abs(x))

print("Sıfıra en yakın sayı:", sifira_en_yakin_sayi)

""" ÇIKTI:
Sıfıra en yakın sayı: -4
"""
```

Son olarak elimizde olan listelerden en az elemanı olanı bulmaya çalışalım:

```python
listeler = [[19,1,9], [20,11,8,5], [7]]
en_az_elemanli = min(listeler, key=len)
print("En az elemanı olan liste:", en_az_elemanli)

""" ÇIKTI:
En az elemanı olan liste: [7]
"""
```

---

### next()

Kullanım şekli `next(iterator, default)` olan bu fonksiyon, **iterator**'den bir sonraki öğeyi döndürür. Öğe kalmadığında **default** argümanındaki değeri döndürmeye başlar.

#### Örnekler

Bazı örneklere göz atalım:

```python
sinif_listesi = ["Ali", "Veli", "Ayşe", "Ahmet"]
sinif_listesi_iter = iter(sinif_listesi)

print(next(sinif_listesi_iter))
print(next(sinif_listesi_iter))
print(next(sinif_listesi_iter))
print(next(sinif_listesi_iter))
print(next(sinif_listesi_iter))

""" ÇIKTI:
Ali
Veli
Ayşe
Ahmet
Traceback (most recent call last):
  File "/home/enesbaspinar/blog/deneme.py", line 8, in <module>
    print(next(sinif_listesi_iter))
StopIteration
"""
```

Gördüğümüz gibi öğe kalmayınca kod hata verdi. Bunun önüne geçmek için **default** argümanını kullanabiliriz. Bu sayede öğe kalmadığında sürekli bu değeri verir:

```python
sinif_listesi = ["Ali", "Veli", "Ayşe", "Ahmet"]
sinif_listesi_iter = iter(sinif_listesi)

print(next(sinif_listesi_iter, "-"))
print(next(sinif_listesi_iter, "-"))
print(next(sinif_listesi_iter, "-"))
print(next(sinif_listesi_iter, "-"))
print(next(sinif_listesi_iter, "-"))
print(next(sinif_listesi_iter, "-"))

""" ÇIKTI:
Ali
Veli
Ayşe
Ahmet
-
-
"""
```

---

### open()

Kullanım şekli `open(file, mode='r', encoding=None)` olan bu fonksiyon, bilgisayarda bir dosya oluşturur ve dosyayı tutan **file** nesnesini döndürür. Dosya kodlaması varsayılan olarak ASCII'dir ancak **encoding** argümanıyla değiştirilebilir. Dosyayı açarken **mode** argümanına göre açar. Modların listesini aşağıda görebilirsiniz:

<div class="table-responsive"> 
    <style type="text/css">
    .tg  {border-collapse:collapse;border-color:#ccc;border-spacing:0;}
    .tg td{background-color:#fff;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
    font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg th{background-color:#f0f0f0;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
    font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-wa1i{font-weight:bold;text-align:center;vertical-align:middle}
    .tg .tg-nrix{text-align:center;vertical-align:middle}
    </style>
    <table class="tg table">
    <thead>
    <tr>
        <th class="tg-wa1i">Mod</th>
        <th class="tg-wa1i">Amaç</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="tg-nrix">r</td>
        <td class="tg-nrix">okuma</td>
    </tr>
    <tr>
        <td class="tg-nrix">r+</td>
        <td class="tg-nrix">okuma + yazma</td>
    </tr>
    <tr>
        <td class="tg-nrix">w</td>
        <td class="tg-nrix">yazma (dosya yoksa oluşturur, varsa üzerine yazar)</td>
    </tr>
    <tr>
        <td class="tg-nrix">w+</td>
        <td class="tg-nrix"><span style="font-weight:400;font-style:normal">okuma + yazma</span> (dosya yoksa oluşturur, varsa üzerine yazar)</td>
    </tr>
    <tr>
        <td class="tg-nrix">a</td>
        <td class="tg-nrix">ekleme <span style="font-weight:400;font-style:normal">(dosya yoksa oluşturur)</span></td>
    </tr>
    <tr>
        <td class="tg-nrix">a+</td>
        <td class="tg-nrix"><span style="font-weight:400;font-style:normal">okuma + </span>ekleme (dosya yoksa oluşturur)</td>
    </tr>
    </tbody>
    </table>
</div>

Benim kafam karıştı. Neyi ne zaman kullanacağız diyorsanız işte size güzel bir diyagram:


<figure>
    <img src="{{ site.baseurl }}/assets/img/posts/python-posts/yerlesik-duzene-gecen-fonksiyonlar/001.png" alt="" style="width: 90%; margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="https://stackoverflow.com/questions/1466000/difference-between-modes-a-a-w-w-and-r-in-built-in-open-function/30566011#30566011" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure>

#### Örnekler

Örnek bir dosya oluşturalım ve iki satır ekleyip okuyalım:

```python
# py dosyasının bulunduğu konumda
# test.txt isimli dosya oluşturuyoruz.
# Başka konumda oluşturmak istersek
# "test.txt" yerine tam yol girebiliriz.

dosya = open("test.txt", "w")
dosya.write("birinci satir")
dosya.close()

# değişken ismi aynı olmak zorunda değil.
dosya = open("test.txt", "r")
print(dosya.read())
dosya.close()
```

Burada göreceğimiz üzere aynı ismi kullanarak dosyamızı 2 kez açtık. İlkinde mod **w** olduğundan satırları ekledik, ardından **r** modunda açıp okuduk. Peki hem okuma hem yazma yapılan modlar nasıl kullanılıyor? Önceki dosyayı **a+** modunda açarak görelim:

```python
print("Ekleme yapmadan varolan yazıları okuyalım:")
dosya = open("test.txt", "a+")
dosya.seek(0)
print(dosya.read())

print("\nŞimdi eklememizi yapıp tekrar okuyalım:")
dosya.write("\nikinci satir")
dosya.seek(0)
print(dosya.read())
dosya.close()

""" ÇIKTI:
Ekleme yapmadan varolan yazıları okuyalım:
birinci satir

Şimdi eklememizi yapıp tekrar okuyalım:
birinci satir
ikinci satir
"""
```

Burada dosyayı ekleme modunda açtığımızdan dolayı **cursor** en sonda olacaktır:

![]({{ site.baseurl }}/assets/img/posts/python-posts/yerlesik-duzene-gecen-fonksiyonlar/002.png)

**seek(0)** ile en başa alarak dosyamızı okuyoruz:

![]({{ site.baseurl }}/assets/img/posts/python-posts/yerlesik-duzene-gecen-fonksiyonlar/003.png)

Okuma işleminden sonra cursor yine sona gelir. Eklememizi yaparız ve okumak için tekrardan en başa alırız.

Son olarak güzel bir uygulamaya değinelim. Örneklerde göreceğimiz gibi, dosyaları işimiz bittiğimmizde kapatmamız gerekir. Ve manuel olarak kapatmak için **close()** metodunu kullanırız. Keşke otomatik olarak kapansaydı dediğiniz anda işin içine **with** giriyor:

```python
with open('test.txt', 'w') as dosya:
    dosya.write("birinci satir")

print(dosya.closed)

""" ÇIKTI:
True # yani dosya kapanmış
"""
```

Her zaman bu yöntemi kullanmaya gayret edin.


---

### ord()

Kullanım şekli `ord(c)` olan bu fonksiyon, verilen Unicode karakterine karşılık gelen tamsayıyı döndür.

<blockquote style="text-align: center;"><b>chr()</b> fonksiyonunun tam tersidir.</blockquote>

#### Örnekler

Bazı örneklere göz atalım:

```python
print(ord("A"))    # 65
print(ord("Z"))    # 90
print(ord("a"))    # 97
print(ord("z"))    # 122
```
---

### pow()

Kullanım şekli `pow(base, exp)` olan bu fonksiyon, verilen sayının kuvvetini alır.

> İngilizcedeki **power** kelimesinin kısaltmasıdır.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(pow(2, 3))     # 8
print(pow(5, 5))     # 3125
print(pow(100, 0.5)) # 10.0
```

---

### print()

Kullanım şekli `print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)` olan bu fonksiyon, verdiğimiz nesneleri varsayılan olarak konsola yazdırır.  **sep** argümanı, nesneleri hangi karakterle birleştireceğini, **end** argümanı ise işlem bittikten sonra en sona yazdırılacak stringi belirler. **file** argümanı, yazma işleminin yapılacağı yeri (varsayılan olarak konsol) değiştirir. **flush** argümanı ise yazdırdıklarımızı dosyayı kapatıp açmadan görebilmemizi sağlar.

> **sep**, **end** ve **file** gibi `sep=xxx` şeklinde yazdığımız argümanlara **keyword argument** (isimli argüman) denir ve sıraları önemsizdir, örneğin **end** önce **sep** sonra yazılabilir ya da tam tersi. `"deneme"` gibi argümanlara **positional argument** (konumsal argüman) denir ve sıraları önemlidir, `"deneme","yazısı"` ile `"yazısı","deneme"` farklı sonuç verir. Dikkat etmemiz gereken diğer bir şey ise konumsal argümanların isimli argümanlardan sonra yazılması gerektiğidir. Geçersiz kullanıma örnek olarak `print("deneme", sep="-", "yazısı")` verilebilir.

> **print()** fonksiyonuna gönderdiğimiz nesneler, otomatik olarak string'e çevrilir. Burada bazen oluşan kafa karışıklığına da değinmek istiyorum. Fonksiyon parantezleri içerisinde **virgül** ve **artı** ile yazmak arasında fark vardır. **Artı** ile yazdığımızda, nesneleri birleştirmiş ve argüman olarak tek bir string vermiş gibi oluruz. Bu operatör string ile başka nesneyi birleştiremez, örneğin `print("Yaşım: " + 21)` yazamayız `print("Yaşım: " + str(21))` şeklinde çevirerek yazmamız gerekir. Ancak **virgül** ile yazdığımızda, her birini argüman olarak göndermiş oluruz ve her nesne fonksiyon tarafından string'e çevrilir, örneğin `print("Yaşım: ", 21)` hata vermeyecektir.

#### Örnekler

Argümansız bazı örneklere göz atalım:

```python
# Boş print() ifadesi ekleyecek olursak, yazdırılacak
# metin şu hale gelecektir: "\n". Bu karakter end 
# argümanının varsayılan değerinden gelir.
print()
print("Selam")

# Birden fazla argüman eklediğimizde, sep
# argümanı devreye girer ve varsayılan olarak
# boşluk karakteri ekler.
print("Selam", "ben", "Enes!")

# Değişkene atadığımız Stringleri de kullanabiliriz.
# 'print(a)', 'print("Python")' haline dönüştürüldükten
# sonra ekrana yazdırılacaktır.
a = "Python"
print(a)

""" ÇIKTI:

Selam
Selam ben Enes!
Python
"""
```

Bu örneklerde göreceğimiz üzere, birden fazla argüman var ise aralarına boşluk karakteri koyar ve en sonda alt satıra geçer. Bu davranışı **sep** ve **end** ile değiştirebiliriz:

```python
# end argümanındaki varsayılan değer alt satıra inmekdir.
# ' deneme -' değerini verisek '\n' silineceği için diğer
# satırı yanına ekler.
print("Birinci", "ikinci", "üçüncü", "dördüncü", sep=' deneme ', end=' deneme...')
print("Tamamlandı!")

""" ÇIKTI:
Birinci deneme ikinci deneme üçüncü deneme dördüncü deneme...Tamamlandı!
"""
```

Yan yana yazmak istememiştik. Küçük bir düzeltme ile bu durumu sorunu çözelim:

```python
print("Birinci", "ikinci", "üçüncü", "dördüncü", sep=' deneme ', end=' deneme...\n')
print("Tamamlandı!")

""" ÇIKTI:
Birinci deneme ikinci deneme üçüncü deneme dördüncü deneme...
Tamamlandı!
"""
```

<blockquote style="text-align: center;">Belirtmekte fayda görüyorum <b>sep</b> argümanı yalnızca virgül ile<br>ayrılmış olan nesneleri birleştirirken araya string ekler. Sona eklemez!</blockquote>

<b>Yıldız (*)</b> operatörü ve <b>sep</b> argümanı güzel bir ikilidir:

```python
print("TBMM", sep='.', end='.\n')

# * operatörü içerdiği her öğeyi tek tek argüman
# olarak gönderir. Dolayısıyla alttaki ifadeler
# birbirine eşittir.
print(*"TBMM", sep='.', end='.\n')
print("T", "B", "M", "M", sep='.', end='.\n')

# Sonuçlarının aynı olduğunu görebiliriz.

""" ÇIKTI:
TBMM.
T.B.M.M.
T.B.M.M.
"""
```

Sadece string ile değil diğer nesneler ile de kullanabiliriz:

```python
# Yazdırılacak tek bir argüman olduğundan 
# sep ile verilen değer bir işe yaramaz.
print([1,2,3,4,5,6], sep="-")
print(*[1,2,3,4,5,6], sep="-")

""" ÇIKTI:
[1, 2, 3, 4, 5, 6]
1-2-3-4-5-6
"""
```

<b>file</b> argümanı çıktı akışının nereye yapılacağını belirler:

```python
sourceFile = open('python.txt', 'w')

# Print fonksiyonuna eklediğimiz file argümanı
# yüzünden konsolda çıktı göremezsiniz. Çıktıyı
# verilen dosyaya yönlendirir.
print('Pretty cool, huh!', file=sourceFile)

# Ancak dosyayı kapatmadan içeriğin değiştiğini
# göremezsiniz.
sourceFile.close()
```

<b>close()</b> metodu kullanmamız gerekmeden her **print()** fonksiyonu sonrası dosyanın içeriğinde yapılan değişikliği görmek isterseniz <b>flush</b> argümanını True yapmamız gerekir (**open()** fonksiyonu kısmında değindiğimiz üzere verimli dosya açma yöntemini de kullanmış olalım):

```python
with open('python.txt', 'w') as dosya:
    print('Python zevklidir!', file=sourceFile, flush=True)
    print('Python zevklidir!', file=sourceFile, flush=True)
    print('Python zevklidir!', file=sourceFile, flush=True)
```

<blockquote style="text-align: center;">Bunu Python yorumlayıcısında deneyecek<br>olursanız aradaki farkı daha iyi görebilirsiniz.</blockquote>

### range()

Kullanım şekli `range(start, stop, step)` olan bu fonksiyon, başlangıç ve bitiş değerleri arasında **immutable** özellikte sayı dizisi içeren **range** nesnesi döndürür.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(list(range(10)))
print(list(range(1, 10)))
print(list(range(1, 10, 2)))
print(list(range(1, -10, -2)))

""" ÇIKTI:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 3, 5, 7, 9]
[1, -1, -3, -5, -7, -9]
```

Döndürülen nesneyi listeye çevirerek kullandığımızı görüyorsunuz. Listeye çevrildiğinde bellekte kalıcı yer edinir. Ve bu sayede listeyi tamamen elde etmiş oluruz. İndeks ile eriştiğimizde sadece o değeri belleğe alır:

```python
print(range(1, 10, 2)[2]) # 3
```
---

### reversed()

Kullanım şekli `reversed(seq)` olan bu fonksiyon, verilen dizinin tersini **iterator** nesnesi olarak döndürür.

> Diziyi değiştirmediğine dikkat edin.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(list(reversed('Python')))
print(list(reversed(('P', 'y', 't', 'h', 'o', 'n')))) 
print(list(reversed(range(5, 9))))
print(list(reversed([1, 2, 4, 3, 5])))

""" ÇIKTI:
['n', 'o', 'h', 't', 'y', 'P']
['n', 'o', 'h', 't', 'y', 'P']
[8, 7, 6, 5]
[5, 3, 4, 2, 1]
"""
```

---

### round()

Kullanım şekli `round(number, ndigits=0)` olan bu fonksiyon, verilen float sayıyı en yakına **ndigits** basamak yuvarlar. Ama az sonra anlatacağım bir gariplik ile yapar bunu.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(round(10))
print(round(10.7))
print(round(-10.7))
print(round(5.5))
print(round(2.99, 1))
print(round(2.6755325, 3))

""" ÇIKTI:
10
11
-11
6
3.0
2.676
"""
```

Bunlarda bi sıkıntı yok beklendiği gibi sonuç verirler. Ancak iki tam sayının tam ortasındaki sayıları ele aldığımızda, yuvarlama işlemi çift sayıya doğru olur. Altındaysa aşağıya, üstündeyse yukarıya yuvarlanır:

```python
print(round(0.5))
print(round(-0.5))
print(round(1.5))
print(round(-1.5))

""" ÇIKTI:
0
0
2
-2
"""
```

Ancak Float sayılarda bazı istisnaları vardır. 2.675 sayısı ondalıklı sayıların hassasiyet sorunundan dolayı 2.67499999999999982236431605997495353221893310546875 olarak görülür. Bu yüzden de yuvarlarsak 2.68 yerine 2.67 verecektir:

```python
print(round(2.675, 2)) # 2.67
```

> Genel olarak, ondalıklı sayılarla işlem yaparken dikkatli olmamız, olabildiğince kaçınmamız gerekir. Eğer kullanmak zorundaysanız bu işler için yazılmış kütüphaneler kullanın.

---

### set()

Kullanım şekli `set(iterable)` olan bu fonksiyon, küme oluşturabilmemizi sağlar. Verilen nesne; dizi (string, tuples), koleksiyon (dictionary) veya **range** olmalıdır.

> Boş sözlük oluşturacağımız zaman, ezberden **{}** yaparsak gümleriz. Bu tanım, sözlük oluşturur. Boş küme belirleyeceksek **set()** fonksiyonu kullanmalıyız.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(set())
print(set(range(10)))
print(set('aeıioöuü'))
print(set(('a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü')))
print(set(['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']))
print(set({'a': 1, 'e': 2, 'ı': 3, 'i': 4, 'o': 5,
            'ö': 6, 'u': 7, 'ü': 8}))

""" ÇIKTI:
set()
{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
{'a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'}
{'a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'}
{'a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'}
{'e', 'i', 'ı', 'a', 'ö', 'u', 'ü', 'o'}
{'a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'}
"""
```

---

### slice()

Kullanım şekli `slice(start, stop, step)` olan bu fonksiyon, yinelenebilir nesneleri dilimlemek için kullanılabilen **slice** nesnesi döndürür.

> Birden fazla kez aynı dilimleme yapılacaksa kullanılabilir ama çokta önemli değil.

#### Örnekler

Normalde dilimleme işlemini nasıl yaptığımıza ve bu fonksiyon ile nasıl yapabileceğimize bakalım:

```python
dunyanin_en_iyi_dili = 'Python'
print("Normal dilimleme   :", dunyanin_en_iyi_dili[:3])

slice_nesnesi = slice(3)
print("Slice nesnesi      :", slice_nesnesi)
print("Slice ile dilimleme:", dunyanin_en_iyi_dili[slice_nesnesi])

""" ÇIKTI:
Normal dilimleme   : Pyt
Slice nesnesi      : slice(None, 3, None)
Slice ile dilimleme: Pyt
"""
```

---

### sorted()

Kullanım şekli `sorted(iterable, key=None, reverse=False)` olan bu fonksiyon, yinelenebilir nesnenin öğelerini sıralayarak liste olarak döndürür. **reverse** argümanı sayesinde sıralamanın yönü değiştirilebilir. **key** argümanı ile de sıralama için kullanılacak karşılaştırma fonksiyonu verilebilir.

> Yinelenebilir nesneyi değiştirmediğine dikkat edin.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(sorted(['e', 'a', 'u', 'o', 'i']))
print(sorted(['e', 'a', 'u', 'o', 'i'], reverse=True))
print(sorted('Python'))
print(sorted('Python', reverse=True))
print(sorted(('e', 'a', 'u', 'o', 'i')))

""" ÇIKTI:
['a', 'e', 'i', 'o', 'u']
['u', 'o', 'i', 'e', 'a']
['P', 'h', 'n', 'o', 't', 'y']
['y', 't', 'o', 'n', 'h', 'P']
['a', 'e', 'i', 'o', 'u']
"""
```

Öğeleri birden fazla nesneden oluşan listeleri sıralayacağımız zaman, **key** argümanını aşağıdaki şekilde kullanabiliriz:

```python
sayi_ciftleri = [(2, 2), (3, 4), (4, 1), (1, 3)]
siralanmis = sorted(sayi_ciftleri, key=lambda x: x[1])
print('Sıralanmış sayı çiftleri:', siralanmis)

""" ÇIKTI:
Sıralanmış sayı çiftleri: [(4, 1), (2, 2), (1, 3), (3, 4)]
"""
```

---

### str()

Kullanım şekli `str()` olan bu fonksiyon, farklı veri tiplerini string'e dönüştürür.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(str(10))
print(str(2.99))

""" ÇIKTI:
'10'
'2.99'
"""
```

---

### sum()

Kullanım şekli `sum(iterable, start=0)` olan bu fonksiyon, yinelenebilir nesnenin öğelerini toplar. Toplama ekleyeceğimiz bir sayı var ise onu **start** argümanı ile verebiliriz.

#### Örnekler

Bazı örneklere göz atalım:

```python
print("Sayıların toplamı:", sum([2.5, 3, 4, -5]))
print("Sayıların toplamı:", sum([2.5, 3, 4, -5], start=10))

""" ÇIKTI:
Sayıların toplamı: 4.5
Sayıların toplamı: 14.5
"""
```

---

### tuple()

Kullanım şekli `tuple(iterable)` olan bu fonksiyon, farklı veri tiplerini tuple nesnesi oluşturabilmemizi sağlar.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(tuple())
print(tuple(range(10)))
print(tuple('aeıioöuü'))
print(tuple(('a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü')))
print(tuple(['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']))
print(tuple({'a': 1, 'e': 2, 'ı': 3, 'i': 4, 'o': 5,
            'ö': 6, 'u': 7, 'ü': 8}))

""" ÇIKTI:
()
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
('a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü')
('a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü')
('a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü')
('a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü')
"""
```

### type()

Kullanım şekli `type(object)` olan bu fonksiyon, verilen nesnenin tipini döndürür.

#### Örnekler

Bazı örneklere göz atalım:

```python
print(type("Python"))

""" ÇIKTI:
<class 'str'>
"""
```

---

### vars()

Kullanım şekli `vars(object)` olan bu fonksiyon, verilen nesnenin özniteliklerini barındıran sözlük döndürür.

#### Örnekler

Bazı örneklere göz atalım:

```python
class Kare:
  def __init__(self, en, boy):
    self.en = en
    self.boy = boy
  
kare_nesnesi = Kare(5, 5)
print(vars(kare_nesnesi))

""" ÇIKTI:
{'x': 5, 'y': 5}
"""
```

---

### zip()

Kullanım şekli `zip(*iterables)` olan bu fonksiyon, yinelenebilir nesneleri indeks indeks tuple halinde eşleştirir. Öğeleri bu eşlerden oluşan listeyi döndürür.

#### Örnekler

Bazı örneklere göz atalım:

```python
siralama = [1, 2, 3]
madalya = ['Altın', 'Gümüş', 'Bronz']
yarisma = zip(siralama, madalya)
print(list(yarisma))

""" ÇIKTI:
[(1, 'Altın'), (2, 'Gümüş'), (3, 'Bronz')]
"""
```

Üçüncü bir liste ile kazanan kişileri de ekleyelim:

```python
siralama = [1, 2, 3]
madalya = ['Altın', 'Gümüş', 'Bronz']
kazanan = ['Ali', 'Ayşe', 'Veli']
yarisma = zip(siralama, madalya, kazanan)
print(list(yarisma))

""" ÇIKTI:
[(1, 'Altın', 'Ali'), (2, 'Gümüş', 'Ayşe'), (3, 'Bronz', 'Veli')]
"""
```

Peki bu listelerin eleman sayıları eşit olmasaydı hata verir miydi?  Vermezdi. Yarışmada 2 kişi yarışmış olduğunu ve 3. lüğü kazanan kimse olmadığını düşünelim. Olanları eşleştirecektir:

```python
siralama = [1, 2, 3]
madalya = ['Altın', 'Gümüş', 'Bronz']
kazanan = ['Ali', 'Ayşe']
yarisma = zip(siralama, madalya, kazanan)
print(list(yarisma))

""" ÇIKTI:
[(1, 'Altın', 'Ali'), (2, 'Gümüş', 'Ayşe')]
"""
```

İki listeyi birleştirdik. Peki ya birleştirdiğimiz listeyi tekrar ayırmak istersek? Bunun için **Yıldız(\*)** operatörünü zip ile birlikte kullanabiliriz:

```python
yarisma = [(1, 'Altın', 'Ali'), (2, 'Gümüş', 'Ayşe')]
siralama, madalya = zip(*yarisma)
print(siralama)
print(madalya)

""" ÇIKTI:
(1, 2)
('Altın', 'Gümüş')
('Ali', 'Ayşe')
"""
```

## Kullanılan Kaynaklar

---

[0] [https://www.gurayyildirim.com.tr/python-dict-hash-ve-dogum-gunu-problemi-1233.html](https://www.gurayyildirim.com.tr/python-dict-hash-ve-dogum-gunu-problemi-1233.html)  
[1] [https://www.programiz.com/python-programming/methods/built-in/](https://www.programiz.com/python-programming/methods/built-in/)  
[2] [https://docs.python.org/3/library/functions.html](https://docs.python.org/3/library/functions.html)  