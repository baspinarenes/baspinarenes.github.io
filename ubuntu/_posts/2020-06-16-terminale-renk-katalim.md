---
layout: post
title: Terminale Biraz Renk Katalım
excerpt: "Ubuntu'nun varsayılan terminaline bakınca sizinde içiniz kararmıyor mu? Bu yazıda, terminalimize biraz renk katacağız."
tag: [terminal, powerline]
---

<div class="warning">
<p>
Bu yazıda izlenilecek yöntem, <a class="warning-link" href="https://twitter.com/rajaraodv"><strong>Raja Rao DV</strong></a>'nin Medium hesabında paylaştığı bir yazıdan alıntılanmıştır. Yazının orjinal haline <a class="warning-link" href="https://medium.com/free-code-camp/jazz-up-your-bash-terminal-a-step-by-step-guide-with-pictures-80267554cb22"><strong>buradan</strong></a> ulaşabilirsiniz.
</p>
</div>

Ubuntu'nun varsayılan terminaline bakınca sizinde içiniz kararmıyor mu? Elbette öyle. Aslında beni farklı arayışa iten, Git kullanmaya başlamam oldu. İzlediğim videolarda ve yazılarda, baktıkça Git kullanma hissi uyandıran terminaller vardı. Birkaç araştırma sonucu anlatacağım yönteme denk geldim ve beğenerek kullanıyorum. Kullandığım ve yazı sonunda elde edeceğimiz görüntü şu şekilde olacaktır:

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/001.png" alt="" style="max-width: 700px;"/>

Harika, değil mi? Ubuntu'nun varsayılan terminali ile karşılaştırmak isterseniz:

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/002.png" alt="" style="max-width: 700px;"/>

Öyleyse değişim başlasın!

## Adım 1: Renk Şemasının Belirlenmesi  {#adim-1-renk-semasinin-belirlenmesi}

Renk şemamızı belirleyerek başlayalım. Bu kısımda, varsayılan ya da **[Gogh](https://mayccoll.github.io/Gogh/)** gibi platformlardan elde edebileceğimiz şemaları kullanabiliriz. Ben varsayılanlardan kullanacağım.

Kullanacağımız şemayı belirledikten sonra özelleştirmeler yapabiliriz. Ben "Built-in schemes" kısmından "Solarized Dark" şemasını seçtikten sonra yazı rengini beyaz ve "Palette" kısmını ise "XTerm" olarak değiştirdim:

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/004.png" alt="" style="max-width: 700px;"/>

"Default" profil olarak tanımlayabileceğiniz gibi yeni bir profil oluşturup onun üzerinden de yapılandırmayı gerçekleştirebilirsiniz. Bu işlemlerden sonra terminal şu şekilde gözükmelidir:

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/005.png" alt="" style="max-width: 700px;"/>

> Bu kısımda terminalinizde kullanıcı adınızın solunda **(base)** önekini görebilirsiniz. Bu, conda kurulumunuzdan gelen varsayılan sanal ortamdır. Yapacağımız işlemler açısından sorun teşkil etmiyor ancak `conda deactivate` komutunu yazarak devredışı bırakabilirsiniz. Yapacaklarımızdan sonra bu öneki gizlemiş olacağız.

## Adım 2: Powerline Kurulumu {#adim-2-poweline-kurulumu}

Powerline, terminale durum göstergesi ekleyen Python (python is everywhere) uygulamasıdır. Bunun için bazı ön gerekliliklere sahip olmalıyız. Gerekli paketlerimizi indirebilmemiz için kullanacağımız pip paket yükleyicisini bilgisayarımıza indirelim:

```bash
$ sudo apt install python3-pip
```

Ve pip üzerinden powerline'ı kuralım:

```bash
$ pip3 install powerline-status
```

## Adım 3: Powerline Daemon'unun Bash'e Eklenmesi {#adim-3-poweline-daemonunun-bashe-eklenmesi}

Terminal her açıldığında Powerline'ın gözükmesi için Powerline Daemon'u Bash dosyamıza eklememiz gerekir. Şu komutu çalıştırarak kurulduğu yeri görelim:

```bash
$ pip3 show powerline-status
```

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/006.png" alt="" style="max-width: 700px;"/>

Çıktıdaki "Location" özelliğinin değerini kopyalayım ve Powerline'ı aktif hale getirmek için `.bashrc_profile` dosyamızı açalım:

```bash
$ nano ~/.bashrc_profile
```

Alt kısımda paylaştığım koddaki "{BU KISMA YAPIŞTIR}" alanını, terminalden aldığımız "Location" değeri ile değiştirelim. Ve değiştirdikten sonra tamamını kopyalayıp `.bashrc_profile` dosyamızın **sonuna** ekleyelim.

```bash
powerline-daemon -q
POWERLINE_BASH_CONTINUATION=1
POWERLINE_BASH_SELECT=1
. {BU KISMA YAPIŞTIR}/powerline/bindings/bash/powerline.sh
```

Son satıra kendi bilginizi girdiğinizden emin olun! Bende dosyanın içeriği aşağıdaki gibidir:

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/007.png" alt="" style="max-width: 700px;"/>

Şimdi `.bashrc` dosyamızı açalım:

```bash
$ nano ~/.bashrc
```

Dosyanın sonuna şu ifadeyi ekleyelim (halihazırda varsa bir daha eklemenize gerek yok):

```bash
 . ~/.bashrc_profile
```

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/008.png" alt="" style="max-width: 700px;"/>

Terminali kapatıp açtığımızda ekranımız aşağıdaki gibi gözükmelidir:

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/009.png" alt="" style="max-width: 700px;"/>

## Adım 4: Kullanılacak Fontun Kurulması {#adim-4-kullanilacak-fontun-kurulmasi}

Sonraki aşamalarfs kolaylık sağlaması adına bir repo oluşturup içerisine gerekli dosyaları ekledim. <a href="https://github.com/baspinarenes/bash-tema-dosyalari">https://github.com/baspinarenes/bash-tema-dosyalari</a> reposuna gidip "Clone or Download" diyerek zip halinde indirelim.

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/010.png" alt="" style="max-width: 700px;"/>

İndirdiğimiz zip doyasındakileri çıkartalım ve içindeki **Meslo LG L DZ Regular for Powerline.ttf** dosyasına çift tıklayalım. Ve **Install Font** butonu ile fontu bilgisayara yükleyelim.

Bu fontu terminale eklemeliyiz. Terminal ayarlarındaki **Text** sekmesinden **Custom font** butonuna tıklayarak **Meslo LG L DZ for Powerline Regular** fontunu seçelim. Font boyutunu istediğimiz boyuta ayarlayabiliriz, 13 bana ideal gibi geldi. Ben ek olarak terminalin o gıcık sesini kapatıyorum :)

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/011.png" alt="" style="max-width: 700px;"/>

Terminali kapatıp açtığımızda görüntü aşağıdaki gibi olmalıdır:

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/012.png" alt="" style="max-width: 700px;"/>

## Adım 5: Git Durum Göstergesinin Eklenmesi {#git-durum-gostergesinin-eklenmesi}

Peki bu terminalde Git ile uğraşırken hangi daldayız, kaç dosya eklendi, kaçı commite hazır gibi oldukça kullanışlı bilgiler de yazsa güzel olmaz mıydı? O halde terminalimize geri dönelim ve Powerline eklentimizi indirelim:

```bash
$ pip3 install powerline-gitstatus
```

Powerline nerede kuruluydu hatırlıyor musunuz? Yeniden bakmaktan zarar gelmez:

```bash
$ pip3 show powerline-status
```

Tekrardan "Location" değerini kopyalayalım:

İndirdiğimiz zipi çıkartalım ve klasöre girelim:

```bash
$ cd ~/Downloads/bash-tema-dosyalari-master/
```

Git'e ait özellikleri eklediğim dosyaları bilgisayarımızda gereken konumlara kopyalayalım (eğer önceden değişiklik yaptıysanız onlar kaybolacaktır). Ve ilgili yerlere yeniden "Location" bilgisini yapıştıralım:

```bash
$ cp default-colorscheme.json {BU KISMA YAPIŞTIR}/powerline/config_files/colorschemes/shell/default.json
# (Benim örneğimde: cp default-colorscheme.json /home/enesbaspinar/.local/lib/python3.8/site-packages/powerline/config_files/colorschemes/shell/default.json)

$ cp default-themes.json {BU KISMA YAPIŞTIR}/powerline/config_files/themes/shell/default.json
# (Benim örneğimde: cp default-themes.json /home/enesbaspinar/.local/lib/python3.8/site-packages/powerline/config_files/themes/shell/default.json)
```

Son olarak şu komutu çalıştıralım:

```bash
$ powerline-daemon --replace
```

Terminali yeniden başlattığınızda her şeyin hazır olduğunu görebilirsiniz.

<img src="{{ site.baseurl }}/assets/img/posts/ubuntu/terminale-renk-katalim/013.png" alt="" style="max-width: 700px;"/>

Yazımız burada bitti. Yeni yazılarda görüşmek üzere, esen kalın.