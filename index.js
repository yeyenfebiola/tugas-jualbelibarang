// inisiasi library
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
const { json } = require("body-parser")

// implementation
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// create MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "jual beli barang"
})

db.connect(error => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("MySQL Connected")
    }
})

//--------------- BAGIAN PELANGGAN ---------------//

// end-point akses data pelanggan
app.get("/pelanggan", (req, res) => {
    // create sql query
    let sql = "select * from pelanggan"

    // run query
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                pelanggan: result
            }
        }
        res.json(response)
    })
})

// end-point akses data pelanggan berdasarkan id_pelanggan tertentu
app.get("/pelanggan/:id_pelanggan", (req, res) => {
    let data = {
        id_pelanggan: req.params.id_pelanggan
    }
    // create sql query
    let sql = "select * from pelanggan where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                pelanggan: result
            }
        }
        res.json(response)
    })
})

// end-point menyimpan data pelanggan
app.post("/pelanggan", (req, res) => {

    //prepare data
    let data = {
        id_pelanggan: req.body.id_pelanggan,
        nama_pelanggan: req.body.nama_pelanggan,
        alamat: req.body.alamat
    }

    // create sql query insert
    let sql = "insert into pelanggan set ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response)
    })
})

// end-point mengubah data pelanggan
app.put("/pelanggan", (req, res) => {

    //prepare data
    let data = [
        {
            id_pelanggan: req.body.id_pelanggan,
            nama_pelanggan: req.body.nama_pelanggan,
            alamat: req.body.alamat
        },

        // primary (primary key)
        {
            id_pelanggan: req.body.id_pelanggan
        }
    ]

    // create sql query insert
    let sql = "update pelanggan set ? where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response)
    })
})

// end-point menghapus data siswa berdasarkan id_pelanggan
app.delete("/pelanggan/:id_pelanggan", (req, res) => {
    // prepare data
    let data = {
        id_pelanggan: req.params.id_pelanggan
    }

    // create query sql delete
    let sql = "delete from pelanggan where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

//--------------- BAGIAN ADMIN ---------------//

// end-point akses data admin
app.get("/admin", (req, res) => {
    // create sql query
    let sql = "select * from admin"

    // run query
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                admin: result
            }
        }
        res.json(response)
    })
})

// end-point akses data admin berdasarkan id_admin tertentu
app.get("/admin/:id_admin", (req, res) => {
    let data = {
        id_admin: req.params.id_admin
    }
    // create sql query
    let sql = "select * from admin where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                admin: result
            }
        }
        res.json(response)
    })
})

// end-point menyimpan data admin
app.post("/admin", (req, res) => {

    //prepare data
    let data = {
        id_admin: req.body.id_admin,
        nama_admin: req.body.nama_admin,
        status_admin: req.body.status_admin
    }

    // create sql query insert
    let sql = "insert into admin set ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response)
    })
})

// end-point mengubah data admin
app.put("/admin", (req, res) => {

    //prepare data
    let data = [
        {
            id_admin: req.body.id_admin,
            nama_admin: req.body.nama_admin,
            status_admin: req.body.status_admin
        },

        // primary (primary key)
        {
            id_admin: req.body.id_admin
        }
    ]

    // create sql query insert
    let sql = "update admin set ? where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response)
    })
})

// end-point menghapus data siswa berdasarkan id_admin
app.delete("/admin/:id_admin", (req, res) => {
    // prepare data
    let data = {
        id_admin: req.params.id_admin
    }

    // create query sql delete
    let sql = "delete from admin where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

//--------------- BAGIAN BARANG ---------------//

// end-point akses data barang
app.get("/barang", (req, res) => {
    // create sql query
    let sql = "select * from barang"

    // run query
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                barang: result
            }
        }
        res.json(response)
    })
})

// end-point akses data barang berdasarkan id_barang tertentu
app.get("/barang/:id_barang", (req, res) => {
    let data = {
        id_barang: req.params.id_barang
    }
    // create sql query
    let sql = "select * from barang where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                barang: result
            }
        }
        res.json(response)
    })
})

// end-point menyimpan data barang
app.post("/barang", (req, res) => {

    //prepare data
    let data = {
        id_barang: req.body.id_barang,
        kondisi_barang: req.body.kondisi_barang,
        nama_barang: req.body.nama_barang,
        stok: req.body.stok
    }

    // create sql query insert
    let sql = "insert into barang set ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response)
    })
})

// end-point mengubah data barang
app.put("/barang", (req, res) => {

    //prepare data
    let data = [
        {
            id_barang: req.body.id_barang,
            kondisi_barang: req.body.kondisi_barang,
            nama_barang: req.body.nama_barang,
            stok: req.body.stok
        },

        // primary (primary key)
        {
            id_barang: req.body.id_barang
        }
    ]

    // create sql query insert
    let sql = "update barang set ? where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response)
    })
})

// end-point menghapus data siswa berdasarkan id_barang
app.delete("/barang/:id_barang", (req, res) => {
    // prepare data
    let data = {
        id_barang: req.params.id_barang
    }

    // create query sql delete
    let sql = "delete from barang where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

app.listen(8000, () => {
    console.log("BERHASILL")
})
