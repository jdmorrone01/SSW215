<?PHP 

namespace App;


class SQLiteConnection{


private $pdo;

public function connect()
{
    if ($this->pdo == null)
    {
        $this->pdo = new \PDO("sqlite:" . 'music_db.db');
    }

}

}
?>