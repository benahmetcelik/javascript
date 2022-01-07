<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Untitled Document</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

</head>

<body>
    <div id="dataResult" style="width: 100%; height:100px;"></div>
    <form onSubmit="return false" id="serial">
        <input type="text" name="title" placeholder="Title">
        <input type="text" name="toDo_desc" placeholder="Description">
        <input type="submit" name="addToDo" id="addToDo" value="Add">
    </form>
    <button onclick="firstData();">First Data</button>
    <table border="1">
        <tbody id="jobs"></tbody>
        <button onclick="loadMore();">Load More</button>
    </table>
<script src="javascript.js"></script>
</body>
</html>