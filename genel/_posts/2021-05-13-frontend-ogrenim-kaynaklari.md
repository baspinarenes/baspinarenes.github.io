---
layout: post
title: Frontend Öğrenim Kaynakları
tag: [resource, guide, cheatsheet]
---

"İnternette artık her konuda bir sürü kaynak var." lafını sürekli duyuyoruz. Ancak nitelikli kaynaklara erişebilmek her
zaman kolay olmuyor veyahut bazılarına denk gelemeyebiliyoruz. Bu yazıda bulduğum iyi kaynakları sizinle paylaşacağım ve
takibini tutabilmek adına kendi bitirdiklerimi de burada kaydediyor olacağım. Bu yazı sürekli güncel, benim tabirimle
"yaşayan" bir yazı olacak.

{% for category in site.data.resources %}

<h2 style="text-align: center;">{{ category.title }}</h2>

---

<ul class="resources">
    {% for resource in category.resources %}
        <li class="resource d-flex flex-column justify-content-between">
            <a href="{{ resource.link }}">
            <img src="/assets/img/resources/{{ resource.img }}" alt="">
            </a>
            <a class="link" href="{{ resource.link }}">{{ resource.name }}</a>
            <span>{{ resource.tag }}</span>
        </li>
    {% endfor %}
</ul>
{% endfor %}
