// UnitConverterViewController.swift
import UIKit

class UnitConverterViewController: UIViewController {
    @IBOutlet weak var unitFromPicker: UIPickerView!
    @IBOutlet weak var unitToPicker: UIPickerView!
    @IBOutlet weak var inputField: UITextField!
    @IBOutlet weak var outputField: UILabel!

    let unitCategories = ["Length", "Weight", "Temperature"]
    let units = [["Meter", "Foot", "Inch"], ["Kilogram", "Pound", "Ounce