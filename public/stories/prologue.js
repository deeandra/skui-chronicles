var prologue=[];
prologue[0] = {};
prologue[1] = {
    id:"1-1",
    storyId: 1,
    chapterNumber: 1,
    title: "Skui Chronicles : Prologue",
    content: [
        {
            id: 1,
            text: [ "The Explosive Origin of The Nobel Prizes", "The Beginning of Everything"],
            background:"/public/images/parkir.jfif",
            tipe: "narasi",
            next: 2
        },
        {
            id: 2,
            text: [
                "di pagi hari yang cerah, kamu dengan langkah semangat berjalan ke belakang gedung yang terlihat kosong. Hari itu adalah hari pertama kamu bekerja sebagai supir bajaj"
            ],
            tipe: "narasi",
            next: 3
        },
        {
            id: 3,
            text: [
                "Kamu mendatangi gedung tersebut, dan segera menyalakan mesin bajaj tersebut.", "Asap mengepul kemana-mana, sambil terbatuk-batuk kamu menjalankan bajajnya walaupun kamu baru saja mendapatkan SIM hasil menyogok kemarin."
            ],
            tipe: "narasi",
            next: 4
        },
        {
            id: 4,
            text: [
                "bajaj tidak berjalan secara lurus, kamu mulai menyenggol bajaj-bajaj disekitarnya."
            ],
            tipe: "narasi",
            next: 5
        },
        {
            id: 5,
            text: [
                " oh tidak! bagaimana ini, aku belum mendapatkan gaji tapi aku sudah membuat goresan di bajaj ini!"
            ],
            charaImg: "/public/images/bicara.png",
            nama: "Kamu",
            tipe: "",
            next: 6
        },
        {
            id: 6,
            text: [
                "Kepanikan kamu semakin bertambah, ketika kamu melihat bajaj nya bergerak dengan cepat ke arah tiang listrik,", "kamu pun segera membanting stir namun naasnya kamu menabrak sebuah bajaj dengan warna yang berbeda dan terlihat lebih mahal.", "Bajaj tersebut terguling-guling hingga memiliki kerusakan yang parah."
            ],
            tipe: "narasi",
            next: 7
        },
        {
            id: 7,
            text: [
                " sungguh, ini adalah hari pertama dan hari terakhir ku bekerja hiks"
            ],
            charaImg: "/public/images/sedih.png",
            nama: "Kamu",
            next: 8
        },
        {
            id: 8,
            text: [ "Tiba-tiba, sekelompok pria berjas hitam datang menghampirimu", "Tampak seorang pria dengan kacamata hitam berdiri paling depan mendekati bajaj yang rusak tersebut"],
            tipe: "narasi",
            next: 9
        },
        {
            id: 9,
            text: [
                "  ah, kacau sekali padahal aku hanya memakirkan bajaj ini sebentar untuk membeli donat. Kau…"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Pria Asing",
            next: 10
        },
        {
            id: 10,
            text: [
                "Pria asing tersebut berhenti berbicara sambil menatapmu dengan tatapan marah"
            ],
            tipe: "narasi",
            next: 11
        },
        {
            id: 11,
            text: [
                " maaf, apakah kau adalah pemilik baja tersebut? aku ingin meminta maaf, aku terlalu gugup untuk membawa bajaj hingga akhirnya menabrak bajaj mewah itu :<"
            ],
            charaImg: "/public/images/sedih.png",
            nama: "Kamu",
            next: 12
        },
        {
            id: 12,
            text: [
                "  aku rasa kau harus bertanggung jawab untuk kecelakan ini"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Pria Asing",
            next: 13
        },
        {
            id: 13,
            text: [
                " oh tentu aku akan mengganti biaya perbaikannya, namun bisakah kau memberi keringanan seperti cicil 12 bulan?"
            ],
            charaImg: "/public/images/sedih.png",
            nama: "Kamu",
            next: 14
        },
        {
            id:14,
            text: "tidak perlu, kau cukup bertanggung jawab dengan membantuku melakukan penelitian dengan cara kembali ke masa lalu. kau mau?",
            charaImg: "/public/images/cogan.png",
            nama: "Pria Asing",
            pilihan: [
                {
                    text: "wah terdengar seru! aku mau tetapi tolong jelaskan lebih lanjut apa maksudmu",
                    next: 17
                },
                {
                    text: "Tidak! kau gila? kembali masa lalu maksudmu? itu adalah hal yang mustahil!",
                    next: 15
                }
            ]
        },
        {
            id: 15,
            text: [
                " oh hohoho, jadi kau ingin mengganti biaya sebesar 30 miliar dalam 12 bulan? apakah kau bisa?", "bahkan untuk menjual organ dalammu saja terlihat tidak cukup bukan? ditambah lagi aku rasa kau mendapatkan SIM dengan hasil menyogok hahaha"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Pria Asing",
            next: 16
        },
        {
            id: 16,
            text: [
                " hiks, aku tidak bisa berkata apa2 lagi, baiklah tolong jelaskan dengan lebih lanjut apa maksudmu kembali ke masa lalu"
            ],
            charaImg: "/public/images/sedih.png",
            nama: "Kamu",
            next: 17
        },
        {
            id: 17,
            text: [
                " baiklah, sebelumnya panggil saja aku supervisor X. Aku merupakan salah satu anggota dari organisasi time travel.", "Aku meminta kau untuk bertanggung jawab dengan membantuku meneliti masa lalu untuk membuat sumber dokumen sejarah yang paling lengkap di dunia ini", "sekaligus untuk memeriksa apakah fakta sejarah yang sudah ada itu benar atau tidak"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 18
        },
        {
            id: 18,
            text: [
                "apakah ini seperti organisasi rahasia Men in White?"
            ],
            charaImg: "/public/images/user-normal.png",
            nama: "Kamu",
            next: 19
        },
        {
            id: 19,
            text: [
                "ya, seperti itu. Kita akan kembali ke masa lalu secara rahasia untuk menghindari diketahui oleh berbagai orang"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 20
        },
        {
            id: 20,
            text: [
                "WAHHH aku seperti spy!! apakah kita tidak akan mengubah masa depan nantinya?"
            ],
            charaImg: "/public/images/user-normal.png",
            nama: "Kamu",
            next: 21
        },
        {
            id: 21,
            text: [
                "tentu tidak, kau tahu quantum theory? dimana saat kembali ke masa lalu dan masa depan maka timeline yang ada yaitu kita tidak pernah adanya kembali ke masa lalu.  "
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 22
        },
        {
            id: 22,
            text: [
                " kau tahu, aku hanyalah supir bajaj, aku tidak berniat untuk mengerti tentang teori-teori tersebut, Jadi aku hanya mengiyakan saja hehehe"
            ],
            charaImg: "/public/images/bicara.png",
            nama: "Kamu",
            next: 23
        },
        {
            id: 23,
            text: [
                " kau… baiklah aku mencoba untuk memakluminya, tapi ingat jika kau membuat kesalahan di masa lalu contohnya seperti tertangkap oleh orang zaman dulu", "maka mesin di bajaj akan self destruct dalam 5 hari, dan aku akan berusaha untuk kabur sendiri hehehe. Ingat itu"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 24
        },
        {
            id: 24,
            text: [
                "gulp, baiklah aku akan berusaha dengan kekuatan bulan!"
            ],
            charaImg: "/public/images/user-normal.png",
            nama: "Kamu",
            next: 25
        },
        {
            id: 25,
            text: [
                " kamu pun menandatangani surat perjanjian dan kontrak yang telah dibuat"
            ],
            tipe: "narasi",
            next: 26
        },
        {
            id: 26,
            text: [
                " jadi sekarang, kita akan ke masa lalu apa?"
            ],
            charaImg: "/public/images/user-normal.png",
            nama: "Kamu",
            next: 27
        },
        {
            id: 27,
            text: [
                "well, kau tahu bahan peledak yang mematikan? namun digunakan dalam berbagai hal baik secara positif maupun negatif? "
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 28
        },
        {
            id: 28,
            text: [
                "hmm, apa maksudmu dinamit?"
            ],
            charaImg: "/public/images/user-normal.png",
            nama: "Kamu",
            next: 29
        },
        {
            id: 29,
            text: [
                "wah aku kagum kau langsung mengetahuinya"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 30
        },
        {
            id: 30,
            text: [
                "oh tentu, karena aku menyuka lagu dynamite nanananaa"
            ],
            charaImg: "/public/images/bicara.png",
            nama: "Kamu",
            next: 31
        },
        {
            id: 31,
        }
    ]
};

// module.exports = { chapter };