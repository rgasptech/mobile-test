//
//  SaveContactViewController.swift
//  RGAMobile
//
//  Created by Gerlandio Da Silva Lucena on 02/06/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit
import RxCocoa
import RxSwift

class SaveContactViewController: UIViewController {

    fileprivate let disposeBag = DisposeBag()
    
    @IBOutlet weak var nameText: UITextField!
    @IBOutlet weak var dataText: UITextField!
    @IBOutlet weak var emailText: UITextField!
    @IBOutlet weak var descriptionText: UITextView!
    @IBOutlet weak var bornDatePicker: UIDatePicker!
    @IBOutlet weak var contactImage: UIImageView!
    @IBOutlet weak var selectImageButton: UIButton!
    @IBOutlet weak var containerDatePicker: UIView!
    
    @IBOutlet weak var datePickerConstraint: NSLayoutConstraint!
    let selectImagePicker = UIImagePickerController()
    var originalContact: Contact?
    
    var contact = Contact()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.animateDatePicker(show: false)
        bindUI()
    }
}

extension SaveContactViewController {
    func bindUI() {
        setupView()
        nameText.rx.text.orEmpty.subscribe(onNext: {[weak self] text in
            self?.contact.name = text
        }).disposed(by: disposeBag)
        
        bornDatePicker.rx.date.subscribe(onNext: {[weak self] date in
            self?.dataText?.text = date.stringDate()
        }).disposed(by: disposeBag)
        
        emailText.rx.text.orEmpty.subscribe(onNext: {[weak self] text in
            self?.contact.email = text
        }).disposed(by: disposeBag)
        
        descriptionText.rx.text.orEmpty.subscribe(onNext: {[weak self] text in
            self?.contact.bio = text
        }).disposed(by: disposeBag)
    }
    
    func setupView() {
        descriptionText.layer.borderColor = UIColor.groupTableViewBackground.cgColor
        nameText.text = originalContact?.name
        emailText.text = originalContact?.email
        descriptionText.text = originalContact?.bio
        dataText.text = originalContact?.born
        
        if let bornDate = originalContact?.born.toDate() {
            bornDatePicker.setDate(bornDate, animated: false)
        }
        
        if let avatar = originalContact?.photo, let urlAvatar = URL(string: avatar) {
            contactImage.sd_setImage(with: urlAvatar, placeholderImage: R.image.avatar())
            selectImageButton.setTitle("", for: .normal)
        }
    }
    
    func animateDatePicker(show: Bool) {
        datePickerConstraint.constant = show ? 0 : containerDatePicker.frame.height * -1
        containerDatePicker.needsUpdateConstraints()
        UIView.animate(withDuration: 0.2) {
            self.containerDatePicker.layoutIfNeeded()
        }
    }
    
    func showAlertAction(success: Bool) {
        let title = success ? "Contato salvo" : "Erro ao salvar contato"
        let message = success ? "Contato salvo com sucesso!" : "Não foi possível salvar o contato!"
        
        let alertController = UIAlertController(title: title, message: message, preferredStyle: UIAlertControllerStyle.alert)
        alertController.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: { (action) in
            self.navigationController?.popViewController(animated: true)
        }))
        present(alertController, animated: true, completion: nil)
    }
}

extension SaveContactViewController {
    
    @IBAction func openSelectedDate() {
        animateDatePicker(show: true)
        self.view.endEditing(true)
    }
    
    @IBAction func didBeginEditing(_ sender: Any) {
        animateDatePicker(show: false)
    }
    
    @IBAction func closeDatePicker(_ sender: Any) {
        animateDatePicker(show: false)
    }
    
    @IBAction func saveContact(_ sender: Any) {
        var operationResult = false
        
        if originalContact == nil {
            if let photoImage = contactImage.image?.saveLocalImage() {
                contact.photo = photoImage
            }
            operationResult = ContactRepository.saveLocalContact(contact: contact)
        } else if let originalContact = originalContact {
            if let photoImage = contactImage.image?.saveLocalImage(imageName: originalContact.contactID) {
                contact.photo = photoImage
            }
            operationResult = ContactRepository.updateLocalContact(contact: contact, originalContact: originalContact)
        }
        
        showAlertAction(success: operationResult)
    }

    
    @IBAction func selectContactImage(_ sender: Any) {
        selectImagePicker.allowsEditing = false
        selectImagePicker.sourceType = .photoLibrary
        selectImagePicker.delegate = self
        present(selectImagePicker, animated: true, completion: nil)
    }
}

extension SaveContactViewController: UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : Any]) {
        if let pickedImage = info[UIImagePickerControllerOriginalImage] as? UIImage {
            contactImage.image = pickedImage
            selectImageButton.setTitle("", for: .normal)
        }
        
        dismiss(animated: true, completion: nil)
    }
    
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        dismiss(animated: true, completion: nil)
    }
}
