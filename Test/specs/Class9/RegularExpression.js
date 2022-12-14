/*

    ^   ->  starts with
    $   ->  ending with

    *   ->  0 or more instances of whatever on the left of it
    +   ->  1 or more instances of whatever on the left of it
    .   ->  1 instance of anything

    .*  -> 0 or more instances of anything
    .+  -> 1 or more instances of anything

    |   ->  or operator

    [abcd]  -> either a or b or c or d for every instance




    b*  -> 0 or more instances of b
        ->  bb
        ->  bbbbbbbb
        ->  aaaaa
        ->  bc

    b+  -> 1 or more instances of b
        -> bbbbb
        -> b
        -> aaaa
        -> bbbbbbb
        -> bc
    
    .   -> 1 instance of anything
        -> %
        -> b
        -> ac
        -> bbbbb

    .*  -> 0 or more instances of anything
        jdkhslajkhksahkdfs;h;lkdsfjs
        1234567890
        jhdjkashdkjlay yiyiuwyeqiwqyeiuyeiqw
    
    .+  -> 1 or more instances of anything
        ytwayuet jhwegyuwteyu ywetyiwuqte
        1234567890


    (Hello|Hi) dear     {Hello-or-Hi<space>dear}
            Hello dear
            Hi dear
            Hi  dear
            Hello Hi dear


    [abcd]
        aaaa

    [0-9]
        7   -> 7
        10  -> 1


    [a-z]
        abcdef -> a
*/