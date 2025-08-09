import sqlite3

class dbInterface:
	con = sqlite3.connect("testing.db", check_same_thread=False)
	cur = con.cursor()

	def testConnection(self):
		res = self.cur.execute("SELECT * FROM teams")
		return "1"

db = dbInterface()