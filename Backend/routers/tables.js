const router = require("express").Router()
const db = require("../database/mySql")

vaccumetable = async () => {
    const vaccumetable = new Promise(async (resolve, reject) => {
        var sql = "CREATE TABLE vaccumetable (date VARCHAR(255),shift VARCHAR(255),machine_Sl_No VARCHAR(255),checked_by VARCHAR(255), process1_result VARCHAR(255), process2_result VARCHAR(255), process3_result VARCHAR(255), process4_result VARCHAR(255), process5_result VARCHAR(255), process6_result VARCHAR(255), process7_result VARCHAR(255), process8_result VARCHAR(255), process9_result VARCHAR(255),description VARCHAR(255),status VARCHAR(255),average VARCHAR(255),statuslists VARCHAR(255))";
        await db.query(sql, function (err, result) {
            if (err) {
                return resolve(err.sqlMessage)
            } else {
                return resolve("Vaccume Table Created")
            }

        });
    })
    return await vaccumetable
}

solderingtable = async () => {
    const solderingtable = new Promise(async (resolve, reject) => {
        var sql = "CREATE TABLE solderingtable (date VARCHAR(255),shift VARCHAR(255),machine_Sl_No VARCHAR(255),station VARCHAR(255),catridge_used VARCHAR(255),temperature VARCHAR(255),checked_by VARCHAR(255),description VARCHAR(255),status VARCHAR(255))";
        await db.query(sql, function (err, result) {
            if (err) {
                return resolve(err.sqlMessage)
            } else {
                return resolve("Soldering Table Created")
            }

        });
    })
    return await solderingtable
}
otatable = async () => {
    const otatable = new Promise(async (resolve, reject) => {
        var sql = "CREATE TABLE otatable (date VARCHAR(255),machine_Sl_No VARCHAR(255),shift VARCHAR(255),checked_by VARCHAR(255), ota1 VARCHAR(255), ota2 VARCHAR(255), ota3 VARCHAR(255), ota4 VARCHAR(255), ota5 VARCHAR(255), ota6 VARCHAR(255), ota7 VARCHAR(255), ota8 VARCHAR(255), ota9 VARCHAR(255),ota10 VARCHAR(255),description VARCHAR(255),status VARCHAR(255),average VARCHAR(255),statuslists VARCHAR(255))";
        await db.query(sql, function (err, result) {
            if (err) {
                return resolve(err.sqlMessage)
            } else {
                return resolve("Ota Table Created")
            }

        });
    })
    return await otatable
}

uwatable = async () => {
    const uwatable = new Promise(async (resolve, reject) => {
        var sql = "CREATE TABLE uwatable (date VARCHAR(255),machine_Sl_No VARCHAR(255),shift VARCHAR(255),checked_by VARCHAR(255), uwa1 VARCHAR(255), uwa2 VARCHAR(255), uwa3 VARCHAR(255), uwa4 VARCHAR(255), uwa5 VARCHAR(255), uwa6 VARCHAR(255), uwa7 VARCHAR(255), uwa8 VARCHAR(255), uwa9 VARCHAR(255),uwa10 VARCHAR(255),description VARCHAR(255),status VARCHAR(255),average VARCHAR(255),statuslists VARCHAR(255))";
        await db.query(sql, function (err, result) {
            if (err) {
                return resolve(err.sqlMessage)
            } else {
                return resolve("Uwa Table Created")
            }

        });
    })
    return await uwatable
}


thermaltable = async () => {
    const thermaltable = new Promise(async (resolve, reject) => {
        var sql = "CREATE TABLE thermaltable (date VARCHAR(255),machine_Sl_No VARCHAR(255),shift VARCHAR(255),checked_by VARCHAR(255), thermal1 VARCHAR(255), thermal2 VARCHAR(255), thermal3 VARCHAR(255), thermal4 VARCHAR(255), thermal5 VARCHAR(255), thermal6 VARCHAR(255), thermal7 VARCHAR(255), thermal8 VARCHAR(255), thermal9 VARCHAR(255),thermal10 VARCHAR(255),thermal11 VARCHAR(255),thermal12 VARCHAR(255),thermal13 VARCHAR(255),description VARCHAR(255),status VARCHAR(255),average VARCHAR(255),statuslists VARCHAR(255))";
        await db.query(sql, function (err, result) {
            if (err) {
                return resolve(err.sqlMessage)
            } else {
                return resolve("Thermal Table Created")
            }

        });
    })
    return await thermaltable
}

router.get("/", async (req, res) => {
    const vaccumetables = await vaccumetable()
    const solderingtables = await solderingtable()
    const otatables = await otatable()
    const uwatables = await uwatable()
    const thermaltables = await thermaltable()
    const tableres = {
        vaccumetable: vaccumetables,
        solderingtable: solderingtables,
        otatable: otatables,
        uwatable: uwatables,
        thermaltable: thermaltables,
    }
    return res.send(tableres)
})

router.get("/*", (req, res) => {
    return res.send("page not found")
})
module.exports = router