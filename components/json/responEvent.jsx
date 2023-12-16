{
    "jsonapi": {
      "version": "2.0"
    },
    "data": [
      {
        "type": "events",
        "id": "1",
        "attributes": {
          "nama": "Debat 1 Live",
          "deskripsi": "Debat pertama capres panas saling sindir",
          "kab_kota": "Denpasar",
          "author_id": 1,
          "createdAt": "2023-12-13T12:06:22.000000Z",
          "updatedAt": "2023-12-13T12:06:22.000000Z"
        },
        "relationships": {
          "caleg_id": {
            "links": {
              "related": "http://localhost/backend/public/api/v2/events/1/caleg-id",
              "self": "http://localhost/backend/public/api/v2/events/1/relationships/caleg-id"
            }
          }
        },
        "links": {
          "self": "http://localhost/backend/public/api/v2/events/1"
        }
      },
      {
        "type": "events",
        "id": "2",
        "attributes": {
          "nama": "Debat 2 Live",
          "deskripsi": "Debat pertama capres panas saling sindir",
          "kab_kota": "Denpasar",
          "author_id": 1,
          "createdAt": "2023-12-13T12:06:22.000000Z",
          "updatedAt": "2023-12-13T12:06:22.000000Z"
        },
        "relationships": {
          "caleg_id": {
            "links": {
              "related": "http://localhost/backend/public/api/v2/events/2/caleg-id",
              "self": "http://localhost/backend/public/api/v2/events/2/relationships/caleg-id"
            }
          }
        },
        "links": {
          "self": "http://localhost/backend/public/api/v2/events/2"
        }
      }
    ]
  }