var prologue=[];
prologue[0]={};
prologue[1]={content: []};
prologue[2]={content: []};

var dynamite=[];
dynamite[0] = {};
dynamite[1] = {
    id:"2-1",
    storyId: 2,
    storyTitle: "The Explosive Origin of The Nobel Prizes",
    chapterNumber: 1,
    title: "Ascanio Sobrero and The Discovery of Nitroglycerine",
    content: [
        {
            id: 1,
            text: [
                "Datanglah Supir Bajaj dengan sang Supervisor di suatu kota yang terkenal menjadi kota industri nomor satu di negara yang terkenal dengan gelato dan pizza-nya.",
                "..Kota Torino (Turin) di Italia.",
                "Dengan raut wajah yang kebingungan, kamu pun melihat kesana kemari dan mencoba mengingat dimanakah ia sekarang berada."
            ],
            background:"/public/images/torino.jpg",
            tipe: "n",
            next: 2
        },
        {
            id: 2,
            text: "Ini di kota Torino atau Turin.",
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            pilihan: [
                {
                    text: "Turin? Italia? markas Juventus?",
                    next: 3
                },
                {
                    text: "Astaga ini dimana…",
                    next: 3
                },
                {
                    text: "BAJAJ, MANA BAJAJ, DIMANA SEKARANG KITA",
                    next: 3
                }
            ]
        },
        {
            id: 3,
            text: [
                "Sederhananya, Torino adalah tempat lahir dari klub sepakbola Juventus, dan tempat tinggal dari salah satu ilmuwan terkenal di dunia.",
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            pilihan: [
                {
                    text: "Tolong, ujian geografi dan sejarah ku sangat jelek. Aku tidak tahu dimana itu.",
                    next: 5
                },
                {
                    text: "Jadi kita akan ketemu para pemain Juventus? Dimana handphoneku? Aku ingin selfie agar orang di kampung iri.",
                    next: 4
                },
                {
                    text: "Katakan saja kita ingin kemana dan bertemu dengan siapa. Aku ingin bajajku kembali..",
                    next: 5
                }
            ]
        },
        {
            id: 4,
            text: [
                "Duh, ini tahun 1847, klub sepak bola Juventus belum ada.",
                "Mereka terbentuk pada tahun 1897, dan fokus saja dengan tujuan kita agar kau tidak berubah menjadi debu."
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            tipe: "",
            next: 5
        },
        {
            id: 5,
            text: [
                "Intinya, kita akan mengunjungi Universitas Torino dan salah satu laboratoriumnya yang berada di Paris.",
                "Kita akan bertemu dengan Ascanio Sobrero, sang penemu Nitrogliserin"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            tipe: "",
            next: 6
        },
        {
            id: 6,
            text: [ 
                "Sesampainya di laboratorium milik Profesor Theophile-Jules Pelouze…"
            ],
            background:"/public/images/torino.jpg",
            tipe: "n",
            next: 7
        },
        {
            id: 7,
            text: [
                "Jadi disinilah tempat Ascanio Sobrero bekerja?",
            ],
            nama: playername,
            tipe: "",
            next: 8
        },
        {
            id: 8,
            text: [
                "Betul sekali, Ascanio merupakan salah satu murid dari Prof TJ Pelouze, kimiawan Prancis."
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            tipe: "",
            next: 9
        },
        {
            id: 9,
            text: [
                "Tapi sebetulnya siapa Ascanio Sobrero?",
                "Kau tahu, setiap pelajaran sejarah sepertinya aku tertidur atau duduk di kantin sekolah.",
                "Akan lebih baik jika kau menjelaskannya kepada ku."
            ],
            nama: playername,
            tipe: "",
            next: 10
        },
        {
            id: 10,
            text: [
                "Ascanio Sobrero merupakan kimiawan Italia yang lahir pada tahun 1812 di kota Casale Monferrato.",
                "Ascanio mempelajari ilmu kimia di Universitas Gießen dan menjadi salah satu profesor di Universitas Torino.",
                "Kini kita akan melihat bagaimana Ascanio bereksperimen dengan nitroselulosa, sebagai bahan peledak, yang dikembangkan oleh Prof TJ Pelouze."
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            tipe: "",
            next: 11
        },
        {
            id: 11,
            tipe: "fc",
            title: "Penemu Nitrogliserin",
            answer: "Ascanio Sobrero",
            next: 12
        },
        {
            id: 12,
            text: [
                "TUNGGU, AKU TIDAK MAU MATI DISINI SENDIRIAN KARENA LEDAKAN NITROGLISERIN. AKU BELUM MENIKAH!"
            ],
            
            nama: playername,
            tipe: "",
            next: 13
        },
        {
            id: 13,
            text: [ 
                "Kamu dan Supervisor berkeliling laboratorium dan melihat beberapa orang yang sedang bekerja di dalam laboratorium tersebut.",
                "Terlihat seseorang yang paling mencolok keluar dari ruangan tersebut.."
            ],
            background:"/public/images/torino.jpg",
            tipe: "n",
            next: 14
        },
        {
            id: 14,
            text: [
                "Kutebak dia adalah Ascarino Sobrero. Kalau aku benar, tolong traktir aku gelato, mumpung di Italia. Kumohon."
            ],
            
            nama: playername,
            tipe: "",
            next: 15
        },
        {
            id: 15,
            text: "Kau benar, tapi aku tak sudi mentraktirmu. Karena kau sudah berutang dengan jumlah yang sangat besar hingga 7 turunan.",
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            pilihan: [
                {
                    text: "Sungguh, kau jahat sekali. Itu pun bajaj kesayangan ku kau tahu.",
                    next: 16
                },
                {
                    text: "Bilang saja kau juga tidak punya uang seperti denganku.",
                    next: 16
                }
            ]
        },
        {
            id: 16,
            text: [
                "Lebih baik kau memperhatikan setiap detail yang ada. Bisa saja aku meninggalkanmu sendirian menjadi abu disini.",
                "Sungguh, aku tidak setia kawan"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            tipe: "",
            next: 17
        },
        {
            id: 17,
            text: [ 
                "Keesokan harinya, kamu dan Supervisor kembali ke laboratorium untuk kembali melihat kondisi sekitar",
                "Terlihat Ascanio mencampurkan sesuatu ke cairan yang tidak berwarna, dan berminyak."
            ],
            background:"/public/images/torino.jpg",
            tipe: "n",
            next: 18
        },
        {
            id: 18,
            tipe: "fc",
            title: "Bahan Pembuatan Nitrogliserin",
            answer: "Gliserol dan Campuran Asam Nitrat dan Asam Sulfat",            
            next: 19
        },
        {
            id: 19,
            text: [
                "Itu adalah nitrogliserin murni, cukup beracun dan mudah terbakar.",
                "Untuk menciptakan nitrogliserin, Ascanio mencampurkan gliserol ke dalam campuran asam nitrat dan asam sulfat yang sangat pekat.",
                "Hal itulah yang membuat nitrogliserin dapat menjadi bahan peledak."
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            tipe: "",
            next: 20
        },
        {
            id: 20,
            text: [
                "Wah, luar biasa. Apakah percobaan berjalan dengan lancar saat menemukan nitrogliserin?"
            ],
            
            nama: playername,
            tipe: "",
            next: 21
        },
        {
            id: 21,
            text: [
                "Tentu tidak. Ascanio mulai mengembangkan nitrogliserin dari tahun 1846.",
                "Hingga saat ini, Ascanio sangat sering terluka akibat pecahan kaca dari tabung reaksi saat Ascanio mencoba memanaskan setetes nitrogliserin."
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            tipe: "",
            next: 22
        },
        {
            id: 22,
            text: [
                "Keren sekali sobat, aku juga sudah menulis seluruh detail yang kulihat. Tapi apa kau tahu satu funfact?",
                "Sepertinya selain geografi dan sejarah, aku tertidur saat pelajaran kimia. Karena aku baru mendengar istilah itu saat tiba di Italia."
            ],
            
            nama: playername,
            tipe: "",
            next: 23
        },
        {
            id: 23,
            text: [
                "..."
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            tipe: "",
            next: 24
        },
        {
            id: 24,
            text: [ 
                "Saat berjalan mengitari laboratorium, sekilas terdengar percakapan sekumpulan orang yang menyebutkan piroglycerine"
            ],
            background:"/public/images/torino.jpg",
            tipe: "narasi",
            next: 25
        },
        {
            id: 25,
            text: [
                "Bisa dijelaskan piroglycerine siapanya nitroglycerine?"    
            ],
        
            nama: playername,
            tipe: "",
            next: 26
        },
        {
            id: 26,
            text: [
                "Piroglycerine merupakan nama lain dari nitrogliserin.",
                "Sesungguhnya Ascanio Sobrero juga menyembunyikan penemuannya selama setahun.",
                "Hal itu ia lakukan karena nitrogliserin merupakan senyawa yang sangat berbahaya, dan dapat menyebabkan ledakan yang sangat besar."
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            tipe: "",
            next: 27
        },
        {
            id: 27,
            tipe: "fc",
            title: "Nama Lain Nitroglycerine",
            answer: "Piroglycerine",
            next: 28
        },
        {
            id: 28,
            text: [ 
                "Terlihat kumpulan berkas yang tertumpuk di meja sekitar laboratorium.",
                "Kamu dan Supervisor pun segera menghampiri berkas tersebut."
            ],
            background:"/public/images/torino.jpg",
            tipe: "narasi",
            next: 29
        },
        {
            id: 29,
            text: [
                "Disini tertulis penemuan yang sudah dikerjakan oleh Ascanio Sobrero!",
                "Wah, Ascanio juga menemukan sifat-sifat dari natrium, timbal tetraklorida, dan colloidal sulfur."    
            ],
            
            nama: playername,
            tipe: "",
            next: 30
        },
        {
            id: 30,
            text: [
                "Akhirnya kita telah menemukan informasi yang cukup lengkap untuk hari ini.",
                "sungguh sangat melelahkan dan mengasyikan ya mengumpulkan informasi seperti ini."   
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            tipe: "",
            next: 31
        },
        {
            id: 31,
            tipe: "fc",
            title: "Penemuan Ascanio Sobrero",
            answer: "Timbal Tetraklorida, Nitroglycerine, Colloidal Sulfur",
            next: 32
        },
        {
            id:32,
            text: "Sekarang aku akan memberikan sedikit quiz. Apakah kamu siap?",
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            pilihan: [
                {
                    text: "Tentu!",
                    next: 34
                },
                {
                    text: "Sesungguhnya tidak.",
                    next: 33
                }
            ]
        },
        {
            id: 33,
            text: [
                "Tenang, seluruh informasi akan tersimpan di Dossier", 
                "Untuk membukanya, klik tombol 'Dossier' pada Menu", 
                "Dan lakukan double klik pada page untuk menutupnya", 
                "Mari kita mulai!"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 34
        },
        {
            id: 34,
            text: "Dimanakah Ascanio menemukan Nitrogliserin?",
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            pilihan: [
                {
                    text: "Universitas Gießen",
                    next: 36
                },
                {
                    text: "Universitas Torino",
                    next: 35
                }
            ]
        },
        {
            id: 35,
            text: [
                "Betul sekali!"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 37
        },
        {
            id: 36,
            text: [
                "Sayang sekali, kurang tepat",
                "Universitas Gießen merupakan tempat ia belajar kimia dan meraih gelar doktor disana pada tahun 1842."
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 37
        },
        {
            id: 37,
            text: "Sebelum dikenal sebagai Nitroglycerin, Ascanio Sobrero menamakan penemuannya sebagai?",
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            pilihan: [
                {
                    text: "Piroglycerine",
                    next: 38
                },
                {
                    text: "Nitroselulosa",
                    next: 39
                }
            ]
        },
        {
            id: 38,
            text: [
                "Betul sekali!"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 40
        },
        {
            id: 39,
            text: [
                "Sayang sekali, kurang tepat",
                "Nitroselulosa adalah bahan kimia yang dikembangkan untuk membentuk Nitrogliserin."
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 40
        },
        {
            id: 40,
            text: "Apakah Sobrero membuat Nitroglycerin dengan menambahkan glycerol ke dalam campuran asam nitrat?",
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            pilihan: [
                {
                    text: "Benar.",
                    next: 41
                },
                {
                    text: "Salah.",
                    next: 42
                }
            ]
        },
        {
            id: 41,
            text: [
                "Betul sekali!"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 43
        },
        {
            id: 42,
            text: [
                "Sayang sekali, kurang tepat",
                " Nitrogliserin dibuat dengan menambahkan gliserol ke dalam campuran asam nitrat dan sulfuric acids"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 43
        },
        {
            id: 43,
            text: "Selain menemukan nitroglycerin, Ascanio Sobrero juga bekerja dan terlibat dalam pekerjaan berbagai penemuan lainnya, kecuali?",
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            pilihan: [
                {
                    text: "Sifat-sifat Natrium.",
                    next: 44
                },
                {
                    text: "Klorin.",
                    next: 45
                },
                {
                    text: "Timbal Tetraklorida.",
                    next: 44
                },
                {
                    text: "Colloidal Sulfur.",
                    next: 44
                }
            ]
        },
        {
            id: 44,
            text: [
                "Betul sekali!"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 46
        },
        {
            id: 45,
            text: [
                "Sayang sekali, kurang tepat",
                "Sobrero bersama dengan ahli kimia lainnya, ia menemukan sifat-sifat natrium dan timbal tetraklorida dan colloidal sulfur.",
                "Sedangkan Chlorine ditemukan Pada 1772, oleh ahli kimia kelahiran Jerman Karl Wilhelm Scheele."
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 46
        },
    ]
};

// module.exports = { chapter };