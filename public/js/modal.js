$('#link-register').on('click', function() {
    // Đóng modal hiện tại
    $('#loginModal').modal('hide');
    
    // Hiển thị modal mới
    $('#registerModal').modal('show');
});
$('#link-forgot-password').on('click', function() {
    // Đóng modal hiện tại
    $('#loginModal').modal('hide');
    
    // Hiển thị modal mới
    $('#forgotPasswordModal').modal('show');
});