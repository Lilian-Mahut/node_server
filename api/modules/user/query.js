<<<<<<< HEAD:api/modules/user/query.js
import db from "../../setup/database";
=======
import db from '../../setup/database';
>>>>>>> master:src/modules/user/query.js

const Queries = {
  getAll: (param, successCallback, failureCallback) => {
    let sqlQuery = `SELECT * FROM users`;

    db.query(sqlQuery, (err, rows) => {
      if (err) {
        return failureCallback(err);
      }
      if (rows.length > 0) {
        return successCallback(rows);
      } else {
        return successCallback('No user.');
      }
    });
  },
  getById: (id, successCallback, failureCallback) => {
    let sqlQuery = `SELECT * FROM users WHERE ID=${id}`;

    db.query(sqlQuery, (err, rows) => {
      if (err) {
        return failureCallback(err);
      }
      if (rows.length > 0) {
        return successCallback(rows);
      } else {
        return successCallback('No matching user');
      }
    });
  },
  getByEmail: email => {
    let sqlQuery = `SELECT * from users WHERE users.email = "${email}"`;

    return new Promise((resolve, reject) => {
      db.query(sqlQuery, (err, rows) => {
        if (err) reject(err);
        resolve(rows[0]);
      });
    });
  },
  register: user => {
    return new Promise((resolve, reject) => {
      let getUserEmailQuery = `SELECT email FROM users WHERE email = "${user.email}"`;

<<<<<<< HEAD:api/modules/user/query.js
		return new Promise((resolve, reject) => {
			db.query(sqlQuery, (err, rows) => {
				if (err) reject(err)
				resolve(rows[0])
			})
		})
	},
	register: user => {
		return new Promise((resolve, reject) => {
			let getUserEmailQuery = `SELECT email FROM goa_fr_users WHERE email = "${user.email}"`

			db.query(getUserEmailQuery, (err1, res) => {
				// if (err1) reject(err1)
				if (err1) reject("merde")

				let addLoginQuery = `INSERT INTO goa_fr_users (user_id, email, password)
					VALUES (NULL, "${user.email}", "${user.hashedPassword}");`

				db.query(addLoginQuery, (err3, res) => {
					if (err3) reject(err3)

					resolve(res)
				})
			})
		})
	}
}

=======
      db.query(getUserEmailQuery, (err1, res) => {
        if (err1) reject(err1);
        let addLoginQuery = `INSERT INTO users (id, email, password) 
					VALUES (NULL, "${user.email}", "${user.hashedPassword}")`;

        db.query(addLoginQuery, (err3, res) => {
          if (err3) reject(err3);
          resolve(res);
        });
      });
    });
  },
};

>>>>>>> master:src/modules/user/query.js
export default Queries;
