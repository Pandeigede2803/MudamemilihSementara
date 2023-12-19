const singleCaleg = [ {
    "jsonapi": {
      "version": "2.0"
    },
    "links": {
      "self": "http://localhost/backend/public/api/v2/calegs/1"
    },
    "data": {
      "type": "calegs",
      "id": "1",
      "attributes": {
        "nama": "Wayan Sukaya",
        "email": "wayan@gmail.com",
        "alamat": "Jl. Denpasar",
        "link_insta": "http://instagram.com",
        "link_fb": "http://fb.com",
        "link_twitter": "http://twitter.com",
        "provinsi": "Bali",
        "kab_kota": "Denpasar",
        "visi_misi": "Visi,\r\nMisi\r\n",
        "program": "Program1-sdkasldkldssad,\r\nProgram2-jksdhfkjshfdsdf,\r\nProgram3-sdfsdfsd,\r\nProgram4,\r\nProgram5\r\n",
        "paket_type": 1,
        "featuring": 1,
        "relawan": 0,
        "skin": "standard-yellow",
        "likes": 120,
        "dislikes": 10,
        "createdAt": "2023-12-08T00:24:11.000000Z",
        "updatedAt": "2023-12-08T00:24:11.000000Z"
      },
      "relationships": {
        "partai": {
          "links": {
            "related": "http://localhost/backend/public/api/v2/calegs/1/partai",
            "self": "http://localhost/backend/public/api/v2/calegs/1/relationships/partai"
          },
          "data": {
            "type": "partais",
            "id": "1"
          }
        },
        "dapil_id": {
          "links": {
            "related": "http://localhost/backend/public/api/v2/calegs/1/dapil-id",
            "self": "http://localhost/backend/public/api/v2/calegs/1/relationships/dapil-id"
          }
        }
      },
      "links": {
        "self": "http://localhost/backend/public/api/v2/calegs/1"
      }
    },
    "included": [
      {
        "type": "partais",
        "id": "1",
        "attributes": {
          "nama": "Partai Kebangkitan Bangsa",
          "logo": "images/partai/logo_pkb.png",
          "createdAt": "-000001-11-29T17:04:35.000000Z",
          "updatedAt": "-000001-11-29T17:04:35.000000Z"
        },
        "links": {
          "self": "http://localhost/backend/public/api/v2/partais/1"
        }
      }
    ]
  }

];

export default singleCaleg