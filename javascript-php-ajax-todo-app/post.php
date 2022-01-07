<?php
/**
 * Database configs and connect
 */
try {
    $db = new PDO("mysql:host=localhost;dbname=javascript;charset=utf8", "root", "");
} catch (PDOException $e) {
    print $e->getMessage();
}
/**
 * It returns data based on the values that come with Ajax. 
 * These incoming values are used to determine the limit.
 */
function refreshData($db, $minLimit, $maxLimit)
{
    $query = $db->query("SELECT * FROM todo LIMIT {$minLimit},{$maxLimit}", PDO::FETCH_ASSOC);
    if ($query->rowCount()) {
        foreach ($query as $row) {
?>
            <tr>
                <td>
                    <?php echo $row['title']; ?>
                </td>
                <td>
                    <?php echo $row['toDo_desc']; ?>
                </td>
                <td>
                    <?php echo $row['toDo_status']; ?>
                </td>
                <td>
                    <button onclick="deleteToDo(<?php echo $row['id'] ?>);">X</button>
                </td>
            </tr>
<?php }
    } else {
        echo 'Sonuc Kalmadı';
    }
}
/**
 * It saves the values that come with Ajax to the database. 
 * If the operation is successful, it will return a gif.
 */
function insertData($db)
{
    $query = $db->prepare("INSERT INTO todo SET
    title = ?,
    toDo_desc = ?,
    toDo_status = ?");
    $insert = $query->execute(array(
        $_POST['title'], $_POST['toDo_desc'], 1
    ));
    if ($insert) {
        $last_id = $db->lastInsertId();
        echo '<img src="https://cdn.dribbble.com/users/39201/screenshots/3694057/nutmeg.gif" style="width: 130px; height:100px;">';
    }
}
/**
 * It deletes the record with the id number that comes with Ajax from the database. 
 * Returns a gif if the operation is successful.
 */
function deleteData($db)
{
    $query = $db->prepare("DELETE FROM todo WHERE id = :id");
    $delete = $query->execute(array(
        'id' => $_POST['id']
    ));
    if ($delete) {
        echo '<img src="https://cdn.dribbble.com/users/3918556/screenshots/6978269/bad-good.gif" style="width: 130px; height:100px;">';
    } else {
        echo '<img src="https://i.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif" style="width: 130px; height:100px;">';
    }
}
if ($_POST) {
    if (isset($_POST['title'])) {
        insertData($db);
    } elseif (isset($_POST['id'])) {
        deleteData($db);
    }
    if (isset($_POST['refresh'])) {
        refreshData($db, $_POST['limitMin'], $_POST['limitMax']);
    }
}
?>