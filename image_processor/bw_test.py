import cv2
im_gray = cv2.imread('test_images/event7.jpg', cv2.CV_LOAD_IMAGE_GRAYSCALE)

(thresh, im_bw) = cv2.threshold(im_gray, 128, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)

cv2.imwrite('test_images/event7_cv_bw.jpg', im_bw)



